document.addEventListener('DOMContentLoaded', () => {
    const boardBody = document.getElementById('board-body');
    const writePostBtn = document.getElementById('write-post-btn');
    const postModal = document.getElementById('post-modal');
    const viewPostModal = document.getElementById('view-post-modal');
    const closeModalBtn = document.querySelector('.close-btn');
    const closeViewModalBtn = document.querySelector('.close-view-btn');
    const postForm = document.getElementById('post-form');
    const modalTitle = document.getElementById('modal-title');
    const postIdInput = document.getElementById('post-id');
    const postTitleInput = document.getElementById('post-title');
    const postAuthorInput = document.getElementById('post-author');
    const postContentInput = document.getElementById('post-content');

    const viewTitle = document.getElementById('view-title');
    const viewAuthor = document.getElementById('view-author');
    const viewDate = document.getElementById('view-date');
    const viewContent = document.getElementById('view-content');
    const deletePostBtn = document.getElementById('delete-post-btn');

    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    let currentPostId = null;

    function savePosts() {
        localStorage.setItem('posts', JSON.stringify(posts));
    }

    function renderPosts() {
        boardBody.innerHTML = '';
        posts.forEach((post, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${posts.length - index}</td>
                <td class="post-title">${post.title}</td>
                <td>${post.author}</td>
                <td>${post.date}</td>
            `;
            tr.addEventListener('click', () => viewPost(post.id));
            boardBody.insertBefore(tr, boardBody.firstChild);
        });
    }

    function openModal(mode, postId = null) {
        if (mode === 'new') {
            modalTitle.textContent = '새 글 작성';
            postForm.reset();
            postIdInput.value = '';
        }
        postModal.classList.remove('hidden');
    }

    function closeModal() {
        postModal.classList.add('hidden');
    }

    function closeViewModal() {
        viewPostModal.classList.add('hidden');
        currentPostId = null;
    }

    function viewPost(id) {
        const post = posts.find(p => p.id === id);
        if (post) {
            currentPostId = id;
            viewTitle.textContent = post.title;
            viewAuthor.textContent = post.author;
            viewDate.textContent = post.date;
            viewContent.innerHTML = post.content.replace(/\n/g, '<br>');
            viewPostModal.classList.remove('hidden');
        }
    }

    function deletePost() {
        if (!currentPostId) return;
        posts = posts.filter(p => p.id !== currentPostId);
        savePosts();
        renderPosts();
        closeViewModal();
    }

    writePostBtn.addEventListener('click', () => openModal('new'));
    closeModalBtn.addEventListener('click', closeModal);
    closeViewModalBtn.addEventListener('click', closeViewModal);

    postForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newPost = {
            id: Date.now(),
            title: postTitleInput.value,
            author: postAuthorInput.value,
            content: postContentInput.value,
            date: new Date().toLocaleDateString()
        };
        posts.push(newPost);
        savePosts();
        renderPosts();
        closeModal();
    });

    deletePostBtn.addEventListener('click', deletePost);

    window.addEventListener('click', (e) => {
        if (e.target === postModal) {
            closeModal();
        } else if (e.target === viewPostModal) {
            closeViewModal();
        }
    });

    renderPosts();
});
