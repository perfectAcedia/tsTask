"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getAndRenderPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
                throw new Error(`Failed to fetch posts. Status: ${response.status}`);
            }
            const posts = yield response.json();
            posts.map((post) => {
                const postNode = document.createElement('div');
                postNode.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        `;
                document.body.appendChild(postNode);
            });
            return posts;
        }
        catch (error) {
            console.error(`Error: ${error}`);
            throw error;
        }
    });
}
