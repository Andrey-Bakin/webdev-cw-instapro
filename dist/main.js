/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./api.js":
      /*!****************!*\
  !*** ./api.js ***!
  \****************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addPost: () => (/* binding */ addPost),\n/* harmony export */   deletePost: () => (/* binding */ deletePost),\n/* harmony export */   getPosts: () => (/* binding */ getPosts),\n/* harmony export */   getUserPosts: () => (/* binding */ getUserPosts),\n/* harmony export */   loginUser: () => (/* binding */ loginUser),\n/* harmony export */   registerUser: () => (/* binding */ registerUser),\n/* harmony export */   removeLike: () => (/* binding */ removeLike),\n/* harmony export */   setLike: () => (/* binding */ setLike),\n/* harmony export */   uploadImage: () => (/* binding */ uploadImage)\n/* harmony export */ });\nconst personalKey = "andrey-bakin";\r\nconst baseHost = "https://wedev-api.sky.pro";\r\nconst postsHost = `${baseHost}/api/v1/${personalKey}/instapro`;\r\n\r\nfunction getPosts({ token }) {\r\n  return fetch(postsHost, {\r\n    method: "GET",\r\n    headers: {\r\n      Authorization: token,\r\n    },\r\n  })\r\n    .then((response) => {\r\n      if (response.status === 401) {\r\n        throw new Error("Нет авторизации");\r\n      }\r\n\r\n      return response.json();\r\n    })\r\n    .then((data) => {\r\n      return data.posts;\r\n    });\r\n}\r\n\r\n// https://github.com/GlebkaF/webdev-hw-api/blob/main/pages/api/user/README.md#%D0%B0%D0%B2%D1%82%D0%BE%D1%80%D0%B8%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%D1%81%D1%8F\r\nfunction registerUser({ login, password, name, imageUrl }) {\r\n  return fetch(baseHost + "/api/user", {\r\n    method: "POST",\r\n    body: JSON.stringify({\r\n      login,\r\n      password,\r\n      name,\r\n      imageUrl,\r\n    }),\r\n  }).then((response) => {\r\n    if (response.status === 400) {\r\n      throw new Error("Такой пользователь уже существует");\r\n    }\r\n    if (text === !text) {\r\n      throw new Error("Введите текст");\r\n    }\r\n    return response.json();\r\n  });\r\n}\r\n\r\nfunction loginUser({ login, password }) {\r\n  return fetch(baseHost + "/api/user/login", {\r\n    method: "POST",\r\n    body: JSON.stringify({\r\n      login,\r\n      password,\r\n    }),\r\n  }).then((response) => {\r\n    if (response.status === 400) {\r\n      throw new Error("Неверный логин или пароль");\r\n    }\r\n    return response.json();\r\n  });\r\n}\r\n\r\n// Загружает картинку в облако, возвращает url загруженной картинки\r\nfunction uploadImage({ file }) {\r\n  const data = new FormData();\r\n  data.append("file", file);\r\n\r\n  return fetch(baseHost + "/api/upload/image", {\r\n    method: "POST",\r\n    body: data,\r\n  }).then((response) => {\r\n    return response.json();\r\n  });\r\n}\r\n\r\nfunction addPost({ token, description, imageUrl }) {\r\n  const commentInputElement = document.getElementById(\'description\')\r\n  return fetch(postsHost, {\r\n    method: \'POST\',\r\n    body: JSON.stringify({\r\n      description,\r\n      imageUrl,\r\n    }),\r\n    headers: {\r\n      Authorization: token,\r\n    },\r\n  }).then((response) => {\r\n    if (response.status === 400) {\r\n      alert(\'Необходимо добавить фото и комментарий\')\r\n    } else {\r\n      return response.json();\r\n    }\r\n  });\r\n}\r\n\r\nfunction getUserPosts({ token, userid }) {\r\n  return fetch(postsHost + `/user-posts/${userid}`, {\r\n      method: \'GET\',\r\n      headers: {\r\n          Authorization: token,\r\n      },\r\n  })\r\n      .then((response) => {\r\n          if (response.status === 401) {\r\n              throw new Error(\'Нет авторизации\')\r\n          }\r\n          return response.json();\r\n      })\r\n      .then((data) => {\r\n        \r\n          return data.posts;\r\n      })\r\n      .catch((error) => {\r\n          alert(\'Пропал интернет, попробуйте позже\')\r\n\r\n      });\r\n}\r\n\r\nfunction deletePost({\r\n  token,\r\n  id\r\n}) {\r\n  return fetch(`${postsHost}/${id}`, {\r\n    method: "DELETE",\r\n    headers: {\r\n      Authorization: token\r\n    }\r\n  })\r\n  \r\n}\r\n\r\nfunction setLike({ token, postId }) {\r\n  return fetch(`${postsHost}/${postId}/like`, {\r\n      method: \'POST\',\r\n      headers: {\r\n          Authorization: token,\r\n      },\r\n  }).then((response) => {\r\n      if (response.status === 401) {\r\n        alert(\'Поставить лайк можно только поcле авторизации\');\r\n          throw new Error(\'Нет авторизации\')\r\n      }\r\n      return response.json();\r\n  });\r\n}\r\nfunction removeLike({ token, postId }) {\r\n  return fetch(`${postsHost}/${postId}/dislike`, {\r\n      method: \'POST\',\r\n      headers: {\r\n          Authorization: token,\r\n      },\r\n  }).then((response) => {\r\n      if (response.status === 401) {\r\n        alert(\'Сначала аторизуйтесь\');\r\n          throw new Error(\'Нет авторизации\')\r\n      }\r\n      return response.json();\r\n  });\r\n}\n\n//# sourceURL=webpack://webdev-cw-instapro/./api.js?'
        );

        /***/
      },

    /***/ "./components/add-post-page-component.js":
      /*!***********************************************!*\
  !*** ./components/add-post-page-component.js ***!
  \***********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderAddPostPageComponent: () => (/* binding */ renderAddPostPageComponent)\n/* harmony export */ });\n/* harmony import */ var _header_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-component.js */ "./components/header-component.js");\n/* harmony import */ var _upload_image_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upload-image-component.js */ "./components/upload-image-component.js");\n\r\n\r\n\r\nfunction renderAddPostPageComponent({ appEl, onAddPostClick }) {\r\n  let imageUrl = ""\r\n\r\n    const appHtml = `\r\n    <div class="page-container">\r\n      <div class="header-container"></div>\r\n      <div class="form">\r\n          <h3 class="form-title">Добавить пост</h3>\r\n      <div class="form-inputs">\r\n          <div class="upload-image-container">\r\n              <div class="upload-image">\r\n                  <label class="file-upload-label secondary-button">\r\n                      <input type="file" class="file-upload-input" style="display:none">Выберите фото\r\n                  </label>\r\n              </div>\r\n          </div>\r\n              <label>Добавьте комментарий:\r\n                <textarea class="input textarea" rows="4" id="description"></textarea>\r\n              </label>\r\n              <button class="button" id="add-button">Добавить</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n   </div>\r\n  `;\r\n\r\n    appEl.innerHTML = appHtml;\r\n\r\n    (0,_header_component_js__WEBPACK_IMPORTED_MODULE_0__.renderHeaderComponent)({\r\n      element: document.querySelector(\'.header-container\'),\r\n    })\r\n    \r\n      ;(0,_upload_image_component_js__WEBPACK_IMPORTED_MODULE_1__.renderUploadImageComponent)({\r\n        element: appEl.querySelector(".upload-image-container"),\r\n        onImageUrlChange(newImageUrl) {\r\n          imageUrl = newImageUrl;\r\n        },\r\n      })\r\n    \r\n\r\n    document.getElementById("add-button").addEventListener("click", () => {\r\n      const description = document.getElementById("description").value;\r\n      onAddPostClick({\r\n        description: description,\r\n        imageUrl: imageUrl,\r\n      })\r\n    })\r\n  }\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./components/add-post-page-component.js?'
        );

        /***/
      },

    /***/ "./components/auth-page-component.js":
      /*!*******************************************!*\
  !*** ./components/auth-page-component.js ***!
  \*******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderAuthPageComponent: () => (/* binding */ renderAuthPageComponent)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api.js */ "./api.js");\n/* harmony import */ var _header_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-component.js */ "./components/header-component.js");\n/* harmony import */ var _upload_image_component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload-image-component.js */ "./components/upload-image-component.js");\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers.js */ "./helpers.js");\n\r\n\r\n\r\n\r\n\r\nfunction renderAuthPageComponent({ appEl, setUser }) {\r\n  let isLoginMode = true;\r\n  let imageUrl = "";\r\n\r\n  const renderForm = () => {\r\n    const appHtml = `\r\n      <div class="page-container">\r\n          <div class="header-container"></div>\r\n          <div class="form">\r\n              <h3 class="form-title">\r\n                ${\r\n                  isLoginMode\r\n                    ? "Вход в&nbsp;Instapro"\r\n                    : "Регистрация в&nbsp;Instapro"\r\n                }\r\n                </h3>\r\n              <div class="form-inputs">\r\n    \r\n                  ${\r\n                    !isLoginMode\r\n                      ? `\r\n                      <div class="upload-image-container"></div>\r\n                      <input type="text" id="name-input" class="input" placeholder="Имя" />\r\n                      `\r\n                      : ""\r\n                  }\r\n                  \r\n                  <input type="text" id="login-input" class="input" placeholder="Логин" />\r\n                  <input type="password" id="password-input" class="input" placeholder="Пароль" />\r\n                  \r\n                  <div class="form-error"></div>\r\n                  \r\n                  <button class="button" id="login-button">${\r\n                    isLoginMode ? "Войти" : "Зарегистрироваться"\r\n                  }</button>\r\n              </div>\r\n            \r\n              <div class="form-footer">\r\n                <p class="form-footer-title">\r\n                  ${isLoginMode ? "Нет аккаунта?" : "Уже есть аккаунт?"}\r\n                  <button class="link-button" id="toggle-button">\r\n                    ${isLoginMode ? "Зарегистрироваться." : "Войти."}\r\n                  </button>\r\n                </p> \r\n               \r\n              </div>\r\n          </div>\r\n      </div>    \r\n`;\r\n\r\n    appEl.innerHTML = appHtml;\r\n\r\n    // Не вызываем перерендер, чтобы не сбрасывалась заполненная форма\r\n    // Точечно обновляем кусочек дом дерева\r\n    const setError = (message) => {\r\n      appEl.querySelector(".form-error").textContent = message;\r\n    };\r\n\r\n    (0,_header_component_js__WEBPACK_IMPORTED_MODULE_1__.renderHeaderComponent)({\r\n      element: document.querySelector(".header-container"),\r\n    });\r\n\r\n    const uploadImageContainer = appEl.querySelector(".upload-image-container");\r\n\r\n    if (uploadImageContainer) {\r\n      (0,_upload_image_component_js__WEBPACK_IMPORTED_MODULE_2__.renderUploadImageComponent)({\r\n        element: appEl.querySelector(".upload-image-container"),\r\n        onImageUrlChange(newImageUrl) {\r\n          imageUrl = newImageUrl;\r\n        },\r\n      });\r\n    }\r\n\r\n    document.getElementById("login-button").addEventListener("click", () => {\r\n      setError("");\r\n\r\n      if (isLoginMode) {\r\n        const login = document.getElementById("login-input").value;\r\n        const password = document.getElementById("password-input").value;\r\n\r\n        if (!login) {\r\n          alert("Введите логин");\r\n          return;\r\n        }\r\n\r\n        if (!password) {\r\n          alert("Введите пароль");\r\n          return;\r\n        }\r\n\r\n        (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.loginUser)({\r\n          login: login,\r\n          password: password,\r\n        })\r\n          .then((user) => {\r\n            setUser(user.user);\r\n          })\r\n          .catch((error) => {\r\n            console.warn(error);\r\n            setError(error.message);\r\n          });\r\n      } else {\r\n        const login = document.getElementById("login-input").value;\r\n        const name = document.getElementById("name-input").value;\r\n        const password = document.getElementById("password-input").value;\r\n        if (!name) {\r\n          alert("Введите имя");\r\n          return;\r\n        }\r\n        if (!login) {\r\n          alert("Введите логин");\r\n          return;\r\n        }\r\n\r\n        if (!password) {\r\n          alert("Введите пароль");\r\n          return;\r\n        }\r\n\r\n        if (!imageUrl) {\r\n          alert("Не выбрана фотография");\r\n          return;\r\n        }\r\n\r\n        (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.registerUser)({\r\n          login: (0,_helpers_js__WEBPACK_IMPORTED_MODULE_3__.sanitizeInput)(login),\r\n          password: password,\r\n          name: (0,_helpers_js__WEBPACK_IMPORTED_MODULE_3__.sanitizeInput)(name),\r\n          imageUrl,\r\n        })\r\n          .then((user) => {\r\n            setUser(user.user);\r\n          })\r\n          .catch((error) => {\r\n            console.warn(error);\r\n            setError(error.message);\r\n          });\r\n      }\r\n    });\r\n\r\n    document.getElementById("toggle-button").addEventListener("click", () => {\r\n      isLoginMode = !isLoginMode;\r\n      renderForm();\r\n    });\r\n  };\r\n\r\n  renderForm();\r\n}\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./components/auth-page-component.js?'
        );

        /***/
      },

    /***/ "./components/header-component.js":
      /*!****************************************!*\
  !*** ./components/header-component.js ***!
  \****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderHeaderComponent: () => (/* binding */ renderHeaderComponent)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./index.js");\n/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../routes.js */ "./routes.js");\n\r\n\r\n\r\nfunction renderHeaderComponent({ element }) {\r\n  element.innerHTML = `\r\n  <div class="page-header">\r\n      <h1 class="logo">instapro</h1>\r\n      <button class="header-button add-or-login-button">\r\n      ${\r\n        _index_js__WEBPACK_IMPORTED_MODULE_0__.user\r\n          ? `<div title="Добавить пост" class="add-post-sign"></div>`\r\n          : "Войти"\r\n      }\r\n      </button>\r\n      ${\r\n        _index_js__WEBPACK_IMPORTED_MODULE_0__.user\r\n          ? `<button title="${_index_js__WEBPACK_IMPORTED_MODULE_0__.user.name}" class="header-button logout-button">Выйти</button>`\r\n          : ""\r\n      }  \r\n  </div>\r\n  \r\n`;\r\n\r\n  element\r\n    .querySelector(".add-or-login-button")\r\n    .addEventListener("click", () => {\r\n      if (_index_js__WEBPACK_IMPORTED_MODULE_0__.user) {\r\n        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_1__.ADD_POSTS_PAGE);\r\n      } else {\r\n        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_1__.AUTH_PAGE);\r\n      }\r\n    });\r\n\r\n  element.querySelector(".logo").addEventListener("click", () => {\r\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_1__.POSTS_PAGE);\r\n  });\r\n\r\n  element.querySelector(".logout-button")?.addEventListener("click", _index_js__WEBPACK_IMPORTED_MODULE_0__.logout);\r\n\r\n  return element;\r\n}\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./components/header-component.js?'
        );

        /***/
      },

    /***/ "./components/loading-page-component.js":
      /*!**********************************************!*\
  !*** ./components/loading-page-component.js ***!
  \**********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderLoadingPageComponent: () => (/* binding */ renderLoadingPageComponent)\n/* harmony export */ });\n/* harmony import */ var _header_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-component.js */ "./components/header-component.js");\n\r\n\r\nfunction renderLoadingPageComponent({ appEl, user, goToPage }) {\r\n  const appHtml = `\r\n              <div class="page-container">\r\n                <div class="header-container"></div>\r\n                <div class="loading-page">\r\n                  <div class="loader"><div></div><div></div><div></div></div>\r\n                </div>\r\n              </div>`;\r\n\r\n  appEl.innerHTML = appHtml;\r\n\r\n  (0,_header_component_js__WEBPACK_IMPORTED_MODULE_0__.renderHeaderComponent)({\r\n    user,\r\n    element: document.querySelector(".header-container"),\r\n    goToPage,\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./components/loading-page-component.js?'
        );

        /***/
      },

    /***/ "./components/posts-page-component.js":
      /*!********************************************!*\
  !*** ./components/posts-page-component.js ***!
  \********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   likeEventListener: () => (/* binding */ likeEventListener),\n/* harmony export */   renderPostsPageComponent: () => (/* binding */ renderPostsPageComponent)\n/* harmony export */ });\n/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../routes.js */ "./routes.js");\n/* harmony import */ var _header_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-component.js */ "./components/header-component.js");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.js */ "./index.js");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.js */ "./api.js");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/formatDistanceToNow.mjs");\n/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns/locale */ "./node_modules/date-fns/locale/ru.mjs");\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers.js */ "./helpers.js");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction renderPostsPageComponent({ appEl }) {\r\n  const getApiPosts = _index_js__WEBPACK_IMPORTED_MODULE_2__.posts.length ? _index_js__WEBPACK_IMPORTED_MODULE_2__.posts.map((postItem) => {\r\n    return {\r\n      postImageUrl: postItem.imageUrl,\r\n      date: (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.formatDistanceToNow)(new Date(postItem.createdAt), { locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_6__.ru }),\r\n      description: (0,_helpers_js__WEBPACK_IMPORTED_MODULE_4__.sanitizeInput)(postItem.description),\r\n      userId: postItem.user.id,\r\n      userName: (0,_helpers_js__WEBPACK_IMPORTED_MODULE_4__.sanitizeInput)(postItem.user.name),\r\n      userLogin: postItem.user.login,\r\n      postImageUserUrl: postItem.user.imageUrl,\r\n      usersLikes: postItem.likes,\r\n      isLiked: postItem.isLiked,\r\n\t  id: postItem.id,\r\n    };\r\n  }) : [];\r\n  const appHtml = \r\n  \t`<div class="page-container">\r\n\t\t<div class="header-container"></div>\r\n\t\t\t${ !getApiPosts.length \r\n\t\t\t\t\t?\r\n\t\t\t\t\t\t`<div>Постов сейчас нет</div>`\r\n\t\t\t\t\t: getApiPosts.map((postItem, index) => {\r\n\t\t\t\t\t\treturn `<ul class="posts">\r\n\t\t\t\t\t<li class="post" data-index=${index}>\r\n\t\t\t\t\t\t<div class="post-header" data-user-id="${postItem.userId}">\r\n\t\t\t\t\t\t\t<img src="${postItem.postImageUserUrl}" class="post-header__user-image">\r\n\t\t\t\t\t\t\t<p class="post-header__user-name">${postItem.userName}</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class="post-image-container">\r\n\t\t\t\t\t\t\t<img class="post-image" data-post-id="${postItem.id}" src="${postItem.postImageUrl}" data-index="${index}">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class="post-likes">\r\n\t\t\t\t\t\t<button data-post-id="${postItem.id}"data-like="${postItem.isLiked ? \'true\' : \'\'}" data-index="${index}" class="like-button">\r\n\t\t\t\t\t\t<img src=${\r\n\t\t\t\t\t\tpostItem.isLiked\r\n\t\t\t\t\t\t\t? \'./assets/images/like-active.svg\'\r\n\t\t\t\t\t\t\t: \'./assets/images/like-not-active.svg\'\r\n\t\t\t\t\t}>\r\n\t\t\t\t\t</button> \r\n\t\t\t\t\t\t\t<p class="post-likes-text">\r\n\t\t\t\t\t\t\tНравится: ${postItem.usersLikes.length > 0 ? `${postItem.usersLikes[postItem.usersLikes.length - 1].name}\r\n\t\t\t\t\t\t\t${postItem.usersLikes.length - 1 > 0 ? \'и ещё\' + (postItem.usersLikes.length - 1) : \'\'} ` : \'0\'}\r\n\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<p class="post-text">\r\n\t\t\t\t\t\t\t<span class="user-name">${postItem.userName}</span>\r\n\t\t\t\t\t\t\t${postItem.description}\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t<p class="post-date">\r\n\t\t\t\t\t\t\t${postItem.date} назад\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul >`})}\r\n\t\t\t</div > `;\r\n  ;\r\n\r\n  appEl.innerHTML = appHtml;\r\n\r\n  (0,_header_component_js__WEBPACK_IMPORTED_MODULE_1__.renderHeaderComponent)({\r\n    element: document.querySelector(".header-container"),\r\n  });\r\n\r\n  for (let userEl of document.querySelectorAll(".post-header")) {\r\n    userEl.addEventListener("click", () => {\r\n      (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_0__.USER_POSTS_PAGE, {\r\n        userId: userEl.dataset.userId,\r\n      });\r\n    });\r\n  }\r\n\r\n  likeEventListener();\r\n}\r\n\r\nfunction likeEventListener () {\r\n\tconst likeButtons = document.querySelectorAll(".like-button")\r\n\tlikeButtons.forEach(likeButton => {\r\n\t\tlikeButton.addEventListener("click", (event) => {\r\n\t\t\tevent.stopPropagation();\r\n\t\t\tconst postId = likeButton.dataset.postId\r\n\t\t\tconst index = likeButton.dataset.index\r\n\t\t\tif (_index_js__WEBPACK_IMPORTED_MODULE_2__.posts[index].isLiked) {\r\n\t\t\t\t(0,_api_js__WEBPACK_IMPORTED_MODULE_3__.removeLike)({ token: (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.getToken)(), postId })\r\n\t\t\t\t\t.then((updatedPost) => {\r\n\t\t\t\t\t\t_index_js__WEBPACK_IMPORTED_MODULE_2__.posts[index].isLiked = false;\r\n\t\t\t\t\t\t_index_js__WEBPACK_IMPORTED_MODULE_2__.posts[index].likes = updatedPost.post.likes;\r\n\t\t\t\t\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_2__.renderApp)();\r\n\t\t\t\t\t})\r\n\t\t\t} else {\r\n\t\t\t\t(0,_api_js__WEBPACK_IMPORTED_MODULE_3__.setLike)({ token: (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.getToken)(), postId })\r\n\t\t\t\t\t.then((updatedPost) => {\r\n\t\t\t\t\t\t_index_js__WEBPACK_IMPORTED_MODULE_2__.posts[index].isLiked = true;\r\n\t\t\t\t\t\t_index_js__WEBPACK_IMPORTED_MODULE_2__.posts[index].likes = updatedPost.post.likes;\r\n\t\t\t\t\t\t(0,_index_js__WEBPACK_IMPORTED_MODULE_2__.renderApp)();\r\n\t\t\t\t\t})\r\n\t\t\t}\r\n\t\t})\r\n\t});\r\n};\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./components/posts-page-component.js?'
        );

        /***/
      },

    /***/ "./components/upload-image-component.js":
      /*!**********************************************!*\
  !*** ./components/upload-image-component.js ***!
  \**********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderUploadImageComponent: () => (/* binding */ renderUploadImageComponent)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api.js */ "./api.js");\n\r\n\r\nfunction renderUploadImageComponent({ element, onImageUrlChange }) {\r\n  let imageUrl = "";\r\n\r\n  const render = () => {\r\n    element.innerHTML = `\r\n  <div class="upload=image">\r\n      ${\r\n        imageUrl\r\n          ? `\r\n          <div class="file-upload-image-conrainer">\r\n            <img class="file-upload-image" src="${imageUrl}">\r\n            <button class="file-upload-remove-button button">Заменить фото</button>\r\n          </div>\r\n          `\r\n          : `\r\n            <label class="file-upload-label secondary-button">\r\n                <input\r\n                  type="file"\r\n                  class="file-upload-input"\r\n                  style="display:none"\r\n                />\r\n                Выберите фото\r\n            </label>\r\n          \r\n      `\r\n      }\r\n  </div>\r\n`;\r\n\r\n    const fileInputElement = element.querySelector(".file-upload-input");\r\n\r\n    fileInputElement?.addEventListener("change", () => {\r\n      const file = fileInputElement.files[0];\r\n      if (file) {\r\n        const lableEl = document.querySelector(".file-upload-label");\r\n        lableEl.setAttribute("disabled", true);\r\n        lableEl.textContent = "Загружаю файл...";\r\n        (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.uploadImage)({ file }).then(({ fileUrl }) => {\r\n          imageUrl = fileUrl;\r\n          onImageUrlChange(imageUrl);\r\n          render();\r\n        });\r\n      }\r\n    });\r\n\r\n    element\r\n      .querySelector(".file-upload-remove-button")\r\n      ?.addEventListener("click", () => {\r\n        imageUrl = "";\r\n        onImageUrlChange(imageUrl);\r\n        render();\r\n      });\r\n  };\r\n\r\n  render();\r\n}\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./components/upload-image-component.js?'
        );

        /***/
      },

    /***/ "./components/user-post-page-component.js":
      /*!************************************************!*\
  !*** ./components/user-post-page-component.js ***!
  \************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   postDeleteButton: () => (/* binding */ postDeleteButton),\n/* harmony export */   renderUserPostsPageComponent: () => (/* binding */ renderUserPostsPageComponent)\n/* harmony export */ });\n/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../routes.js */ "./routes.js");\n/* harmony import */ var _header_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-component.js */ "./components/header-component.js");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index.js */ "./index.js");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.js */ "./api.js");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/formatDistanceToNow.mjs");\n/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns/locale */ "./node_modules/date-fns/locale/ru.mjs");\n/* harmony import */ var _posts_page_component_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts-page-component.js */ "./components/posts-page-component.js");\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers.js */ "./helpers.js");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction renderUserPostsPageComponent({ appEl }) {\r\n  const getApiPosts = _index_js__WEBPACK_IMPORTED_MODULE_2__.posts.map((postItem) => {\r\n    return {\r\n      postImageUrl: postItem.imageUrl,\r\n      date: (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.formatDistanceToNow)(new Date(postItem.createdAt), { locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_7__.ru }),\r\n      description: (0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.sanitizeInput)(postItem.description),\r\n      userId: postItem.user.id,\r\n      userName: (0,_helpers_js__WEBPACK_IMPORTED_MODULE_5__.sanitizeInput)(postItem.user.name),\r\n      userLogin: postItem.user.login,\r\n      postImageUserUrl: postItem.user.imageUrl,\r\n      usersLikes: postItem.likes,\r\n      isLiked: postItem.isLiked,\r\n      id: postItem.id,\r\n    };\r\n  });\r\n  const appHtml = getApiPosts.map((postItem, index) => {\r\n    return `\r\n\t\t<div class="page-container">\r\n        \t<div class="header-container"></div>\r\n        \t<ul class="posts">\r\n          \t\t<li class="post" data-index=${index}>\r\n\t\t\t\t\t<div class="post-header" data-user-id="${postItem.userId}">\r\n\t\t\t\t\t\t<img src="${postItem.postImageUserUrl}" class="post-header__user-image">\r\n\t\t\t\t\t\t<p class="post-header__user-name">${postItem.userName}</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="post-image-container">\r\n\t\t\t\t\t\t<img class="post-image" src="${postItem.postImageUrl}" data-index="${index}">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="post-likes">\r\n\t\t\t\t\t\t<button data-post-id="${postItem.id}"data-like="${postItem.isLiked ? \'true\' : \'\'}" data-index="${index}" class="like-button">\r\n\t\t\t\t\t<img src=${\r\n\t\t\t\t\t  postItem.isLiked\r\n\t\t\t\t\t\t  ? \'./assets/images/like-active.svg\'\r\n\t\t\t\t\t\t  : \'./assets/images/like-not-active.svg\'\r\n\t\t\t\t  }>\r\n\t\t\t\t  </button> \r\n\t\t\t\t\t\t<p class="post-likes-text">\r\n\t\t\t\t\t\tНравится: <strong>${\r\n              postItem.usersLikes.length > 0\r\n                ? `${postItem.usersLikes[postItem.usersLikes.length - 1].name}\r\n\t\t\t\t\t\t${\r\n              postItem.usersLikes.length - 1 > 0\r\n                ? "и ещё" + (postItem.usersLikes.length - 1)\r\n                : ""\r\n            } `\r\n                : "0"\r\n            }\r\n\t\t\t\t\t\t</p>\r\n            <button class="delete-button" data-post-id="${postItem.id}">\r\n            ${postItem.userId === _index_js__WEBPACK_IMPORTED_MODULE_2__.user?._id ? `<p class="delete">Удалить</p>` : ""} \r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<p class="post-text">\r\n\t\t\t\t\t\t<span class="user-name">${postItem.userName}</span>\r\n\t\t\t\t\t\t${postItem.description}\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class="post-date">\r\n\t\t\t\t\t\t${postItem.date}\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</li>\r\n\t\t\t</ul >\r\n     \t</div > `;\r\n  });\r\n\r\n  appEl.innerHTML = appHtml;\r\n\r\n  (0,_header_component_js__WEBPACK_IMPORTED_MODULE_1__.renderHeaderComponent)({\r\n    element: document.querySelector(".header-container"),\r\n  });\r\n\r\n  for (let userEl of document.querySelectorAll(".post-header")) {\r\n    userEl.addEventListener("click", () => {\r\n      (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_0__.USER_POSTS_PAGE, {\r\n        userId: userEl.dataset.userId,\r\n      });\r\n    });\r\n  }\r\n  postDeleteButton();\r\n\r\n  (0,_posts_page_component_js__WEBPACK_IMPORTED_MODULE_4__.likeEventListener)();\r\n}\r\n\r\nfunction postDeleteButton() {\r\nconst deleteButtons = document.querySelectorAll(".delete-button");\r\nfor (let deleteButton of deleteButtons) {\r\n  deleteButton.addEventListener("click", () => {\r\n\tconst id = deleteButton.dataset.postId\r\n  console.log();\r\n\t(0,_api_js__WEBPACK_IMPORTED_MODULE_3__.deletePost)({ token: (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.getToken)(), id })\r\n  .then(() => {\r\n      (0,_index_js__WEBPACK_IMPORTED_MODULE_2__.goToPage)(_routes_js__WEBPACK_IMPORTED_MODULE_0__.USER_POSTS_PAGE, {\r\n        userId: _index_js__WEBPACK_IMPORTED_MODULE_2__.user._id\r\n      })\r\n    })\r\n})\r\n}\r\n}\r\n\r\n(0,_posts_page_component_js__WEBPACK_IMPORTED_MODULE_4__.likeEventListener)();\n\n//# sourceURL=webpack://webdev-cw-instapro/./components/user-post-page-component.js?'
        );

        /***/
      },

    /***/ "./helpers.js":
      /*!********************!*\
  !*** ./helpers.js ***!
  \********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUserFromLocalStorage: () => (/* binding */ getUserFromLocalStorage),\n/* harmony export */   removeUserFromLocalStorage: () => (/* binding */ removeUserFromLocalStorage),\n/* harmony export */   sanitizeInput: () => (/* binding */ sanitizeInput),\n/* harmony export */   saveUserToLocalStorage: () => (/* binding */ saveUserToLocalStorage)\n/* harmony export */ });\nfunction saveUserToLocalStorage(user) {\r\n  window.localStorage.setItem(\"user\", JSON.stringify(user));\r\n}\r\n\r\nfunction getUserFromLocalStorage(user) {\r\n  try {\r\n    return JSON.parse(window.localStorage.getItem(\"user\"));\r\n  } catch (error) {\r\n    return null;\r\n  }\r\n}\r\n\r\nfunction removeUserFromLocalStorage(user) {\r\n  window.localStorage.removeItem(\"user\");\r\n}\r\n\r\nfunction sanitizeInput(text) {\r\n  return text\r\n    .replaceAll('&', '&amp;')\r\n    .replaceAll('<', '&lt;')\r\n    .replaceAll('>', '&gt;')\r\n    .replaceAll('\"', '&quot;')\r\n}\n\n//# sourceURL=webpack://webdev-cw-instapro/./helpers.js?"
        );

        /***/
      },

    /***/ "./index.js":
      /*!******************!*\
  !*** ./index.js ***!
  \******************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getToken: () => (/* binding */ getToken),\n/* harmony export */   goToPage: () => (/* binding */ goToPage),\n/* harmony export */   logout: () => (/* binding */ logout),\n/* harmony export */   page: () => (/* binding */ page),\n/* harmony export */   posts: () => (/* binding */ posts),\n/* harmony export */   renderApp: () => (/* binding */ renderApp),\n/* harmony export */   setPosts: () => (/* binding */ setPosts),\n/* harmony export */   user: () => (/* binding */ user)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ "./api.js");\n/* harmony import */ var _components_add_post_page_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/add-post-page-component.js */ "./components/add-post-page-component.js");\n/* harmony import */ var _components_auth_page_component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/auth-page-component.js */ "./components/auth-page-component.js");\n/* harmony import */ var _routes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes.js */ "./routes.js");\n/* harmony import */ var _components_posts_page_component_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/posts-page-component.js */ "./components/posts-page-component.js");\n/* harmony import */ var _components_loading_page_component_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/loading-page-component.js */ "./components/loading-page-component.js");\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers.js */ "./helpers.js");\n/* harmony import */ var _components_user_post_page_component_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/user-post-page-component.js */ "./components/user-post-page-component.js");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet user = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_6__.getUserFromLocalStorage)();\r\nlet page = null;\r\nlet posts = [];\r\nconst setPosts = (newPosts) => {\r\n  posts = newPosts;\r\n}\r\n\r\nconst getToken = () => {\r\n  const token = user ? `Bearer ${user.token}` : undefined;\r\n  return token;\r\n};\r\n\r\nconst logout = () => {\r\n  user = null;\r\n  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_6__.removeUserFromLocalStorage)();\r\n  goToPage(_routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE);\r\n};\r\n\r\n/**\r\n * Включает страницу приложения\r\n */\r\nconst goToPage = (newPage, data) => {\r\n  if (\r\n    [\r\n      _routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE,\r\n      _routes_js__WEBPACK_IMPORTED_MODULE_3__.AUTH_PAGE,\r\n      _routes_js__WEBPACK_IMPORTED_MODULE_3__.ADD_POSTS_PAGE,\r\n      _routes_js__WEBPACK_IMPORTED_MODULE_3__.USER_POSTS_PAGE,\r\n      _routes_js__WEBPACK_IMPORTED_MODULE_3__.LOADING_PAGE,\r\n    ].includes(newPage)\r\n  ) {\r\n    if (newPage === _routes_js__WEBPACK_IMPORTED_MODULE_3__.ADD_POSTS_PAGE) {\r\n      page = user ? _routes_js__WEBPACK_IMPORTED_MODULE_3__.ADD_POSTS_PAGE : _routes_js__WEBPACK_IMPORTED_MODULE_3__.AUTH_PAGE;\r\n      return renderApp();\r\n    }\r\n\r\n    if (newPage === _routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE) {\r\n      page = _routes_js__WEBPACK_IMPORTED_MODULE_3__.LOADING_PAGE;\r\n      renderApp();\r\n\r\n      return (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getPosts)({ token: getToken() })\r\n        .then((newPosts) => {\r\n          page = _routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE;\r\n          posts = newPosts;\r\n          renderApp();\r\n        })\r\n        .catch((error) => {\r\n          console.error(error);\r\n          goToPage(_routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE);\r\n        });\r\n    }\r\n\r\n    if (newPage === _routes_js__WEBPACK_IMPORTED_MODULE_3__.USER_POSTS_PAGE) {\r\n      let userId = data.userId;\r\n      \r\n      return (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getUserPosts)({ token: getToken(), userid: userId })\r\n        .then((newPosts) => {\r\n          page = _routes_js__WEBPACK_IMPORTED_MODULE_3__.USER_POSTS_PAGE;\r\n          posts = [];\r\n          return renderApp();\r\n        });\r\n      }\r\n\r\n    page = newPage;\r\n    renderApp();\r\n\r\n    return;\r\n  }\r\n\r\n  throw new Error("страницы не существует");\r\n};\r\n\r\nconst renderApp = () => {\r\n  const appEl = document.getElementById("app");\r\n  if (page === _routes_js__WEBPACK_IMPORTED_MODULE_3__.LOADING_PAGE) {\r\n    return (0,_components_loading_page_component_js__WEBPACK_IMPORTED_MODULE_5__.renderLoadingPageComponent)({\r\n      appEl,\r\n      user,\r\n      goToPage,\r\n    });\r\n  }\r\n\r\n  if (page === _routes_js__WEBPACK_IMPORTED_MODULE_3__.AUTH_PAGE) {\r\n    return (0,_components_auth_page_component_js__WEBPACK_IMPORTED_MODULE_2__.renderAuthPageComponent)({\r\n      appEl,\r\n      setUser: (newUser) => {\r\n        user = newUser;\r\n        (0,_helpers_js__WEBPACK_IMPORTED_MODULE_6__.saveUserToLocalStorage)(user);\r\n        goToPage(_routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE);\r\n      },\r\n      user,\r\n      goToPage,\r\n    });\r\n  }\r\n\r\n  if (page === _routes_js__WEBPACK_IMPORTED_MODULE_3__.ADD_POSTS_PAGE) {\r\n    return (0,_components_add_post_page_component_js__WEBPACK_IMPORTED_MODULE_1__.renderAddPostPageComponent)({\r\n      appEl,\r\n      onAddPostClick({ description, imageUrl }) {\r\n         (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.addPost)({\r\n          token: getToken(),\r\n          description,\r\n          imageUrl,\r\n        }).then((responceData) => {\r\n          console.log(responceData);\r\n          (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getPosts)({ token: getToken() }).then((response) => {\r\n            posts = response;\r\n            renderApp();\r\n          })\r\n        });\r\n        goToPage(_routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE);\r\n      },\r\n    });\r\n  }\r\n\r\n  if (page === _routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE) {\r\n    return (0,_components_posts_page_component_js__WEBPACK_IMPORTED_MODULE_4__.renderPostsPageComponent)({\r\n      appEl,\r\n    });\r\n  }\r\n\r\n  if (page === _routes_js__WEBPACK_IMPORTED_MODULE_3__.USER_POSTS_PAGE) {\r\n    return (0,_components_user_post_page_component_js__WEBPACK_IMPORTED_MODULE_7__.renderUserPostsPageComponent)({\r\n      appEl,\r\n    });\r\n  }\r\n};\r\n\r\ngoToPage(_routes_js__WEBPACK_IMPORTED_MODULE_3__.POSTS_PAGE);\n\n//# sourceURL=webpack://webdev-cw-instapro/./index.js?'
        );

        /***/
      },

    /***/ "./routes.js":
      /*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ADD_POSTS_PAGE: () => (/* binding */ ADD_POSTS_PAGE),\n/* harmony export */   AUTH_PAGE: () => (/* binding */ AUTH_PAGE),\n/* harmony export */   LOADING_PAGE: () => (/* binding */ LOADING_PAGE),\n/* harmony export */   POSTS_PAGE: () => (/* binding */ POSTS_PAGE),\n/* harmony export */   USER_POSTS_PAGE: () => (/* binding */ USER_POSTS_PAGE)\n/* harmony export */ });\n// Файл со списком страниц приложения\r\nconst POSTS_PAGE = "posts";\r\nconst USER_POSTS_PAGE = "user-posts";\r\nconst AUTH_PAGE = "auth";\r\nconst ADD_POSTS_PAGE = "add-post";\r\nconst LOADING_PAGE = "loading";\r\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./routes.js?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/_lib/defaultOptions.mjs":
      /*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/defaultOptions.mjs ***!
  \*******************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),\n/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)\n/* harmony export */ });\nlet defaultOptions = {};\n\nfunction getDefaultOptions() {\n  return defaultOptions;\n}\n\nfunction setDefaultOptions(newOptions) {\n  defaultOptions = newOptions;\n}\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./node_modules/date-fns/_lib/defaultOptions.mjs?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/_lib/getRoundingMethod.mjs":
      /*!**********************************************************!*\
  !*** ./node_modules/date-fns/_lib/getRoundingMethod.mjs ***!
  \**********************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getRoundingMethod: () => (/* binding */ getRoundingMethod)\n/* harmony export */ });\nfunction getRoundingMethod(method) {\n  return (number) => {\n    const round = method ? Math[method] : Math.trunc;\n    const result = round(number);\n    // Prevent negative zero\n    return result === 0 ? 0 : result;\n  };\n}\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./node_modules/date-fns/_lib/getRoundingMethod.mjs?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs":
      /*!************************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs ***!
  \************************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getTimezoneOffsetInMilliseconds: () => (/* binding */ getTimezoneOffsetInMilliseconds)\n/* harmony export */ });\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate.mjs */ \"./node_modules/date-fns/toDate.mjs\");\n\n\n/**\n * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.\n * They usually appear for dates that denote time before the timezones were introduced\n * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891\n * and GMT+01:00:00 after that date)\n *\n * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,\n * which would lead to incorrect calculations.\n *\n * This function returns the timezone offset in milliseconds that takes seconds in account.\n */\nfunction getTimezoneOffsetInMilliseconds(date) {\n  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);\n  const utcDate = new Date(\n    Date.UTC(\n      _date.getFullYear(),\n      _date.getMonth(),\n      _date.getDate(),\n      _date.getHours(),\n      _date.getMinutes(),\n      _date.getSeconds(),\n      _date.getMilliseconds(),\n    ),\n  );\n  utcDate.setUTCFullYear(_date.getFullYear());\n  return +date - +utcDate;\n}\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/compareAsc.mjs":
      /*!**********************************************!*\
  !*** ./node_modules/date-fns/compareAsc.mjs ***!
  \**********************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   compareAsc: () => (/* binding */ compareAsc),\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");\n\n\n/**\n * @name compareAsc\n * @category Common Helpers\n * @summary Compare the two dates and return -1, 0 or 1.\n *\n * @description\n * Compare the two dates and return 1 if the first date is after the second,\n * -1 if the first date is before the second or 0 if dates are equal.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param dateLeft - The first date to compare\n * @param dateRight - The second date to compare\n *\n * @returns The result of the comparison\n *\n * @example\n * // Compare 11 February 1987 and 10 July 1989:\n * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))\n * //=> -1\n *\n * @example\n * // Sort the array of dates:\n * const result = [\n *   new Date(1995, 6, 2),\n *   new Date(1987, 1, 11),\n *   new Date(1989, 6, 10)\n * ].sort(compareAsc)\n * //=> [\n * //   Wed Feb 11 1987 00:00:00,\n * //   Mon Jul 10 1989 00:00:00,\n * //   Sun Jul 02 1995 00:00:00\n * // ]\n */\nfunction compareAsc(dateLeft, dateRight) {\n  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft);\n  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);\n\n  const diff = _dateLeft.getTime() - _dateRight.getTime();\n\n  if (diff < 0) {\n    return -1;\n  } else if (diff > 0) {\n    return 1;\n    // Return 0 if diff is 0; return NaN if diff is NaN\n  } else {\n    return diff;\n  }\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compareAsc);\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./node_modules/date-fns/compareAsc.mjs?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/constants.mjs":
      /*!*********************************************!*\
  !*** ./node_modules/date-fns/constants.mjs ***!
  \*********************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),\n/* harmony export */   daysInYear: () => (/* binding */ daysInYear),\n/* harmony export */   maxTime: () => (/* binding */ maxTime),\n/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),\n/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),\n/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),\n/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),\n/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),\n/* harmony export */   minTime: () => (/* binding */ minTime),\n/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),\n/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),\n/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),\n/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),\n/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),\n/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),\n/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),\n/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),\n/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),\n/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),\n/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),\n/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),\n/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),\n/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)\n/* harmony export */ });\n/**\n * @module constants\n * @summary Useful constants\n * @description\n * Collection of useful date constants.\n *\n * The constants could be imported from `date-fns/constants`:\n *\n * ```ts\n * import { maxTime, minTime } from "./constants/date-fns/constants";\n *\n * function isAllowedTime(time) {\n *   return time <= maxTime && time >= minTime;\n * }\n * ```\n */\n\n/**\n * @constant\n * @name daysInWeek\n * @summary Days in 1 week.\n */\nconst daysInWeek = 7;\n\n/**\n * @constant\n * @name daysInYear\n * @summary Days in 1 year.\n *\n * @description\n * How many days in a year.\n *\n * One years equals 365.2425 days according to the formula:\n *\n * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.\n * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days\n */\nconst daysInYear = 365.2425;\n\n/**\n * @constant\n * @name maxTime\n * @summary Maximum allowed time.\n *\n * @example\n * import { maxTime } from "./constants/date-fns/constants";\n *\n * const isValid = 8640000000000001 <= maxTime;\n * //=> false\n *\n * new Date(8640000000000001);\n * //=> Invalid Date\n */\nconst maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;\n\n/**\n * @constant\n * @name minTime\n * @summary Minimum allowed time.\n *\n * @example\n * import { minTime } from "./constants/date-fns/constants";\n *\n * const isValid = -8640000000000001 >= minTime;\n * //=> false\n *\n * new Date(-8640000000000001)\n * //=> Invalid Date\n */\nconst minTime = -maxTime;\n\n/**\n * @constant\n * @name millisecondsInWeek\n * @summary Milliseconds in 1 week.\n */\nconst millisecondsInWeek = 604800000;\n\n/**\n * @constant\n * @name millisecondsInDay\n * @summary Milliseconds in 1 day.\n */\nconst millisecondsInDay = 86400000;\n\n/**\n * @constant\n * @name millisecondsInMinute\n * @summary Milliseconds in 1 minute\n */\nconst millisecondsInMinute = 60000;\n\n/**\n * @constant\n * @name millisecondsInHour\n * @summary Milliseconds in 1 hour\n */\nconst millisecondsInHour = 3600000;\n\n/**\n * @constant\n * @name millisecondsInSecond\n * @summary Milliseconds in 1 second\n */\nconst millisecondsInSecond = 1000;\n\n/**\n * @constant\n * @name minutesInYear\n * @summary Minutes in 1 year.\n */\nconst minutesInYear = 525600;\n\n/**\n * @constant\n * @name minutesInMonth\n * @summary Minutes in 1 month.\n */\nconst minutesInMonth = 43200;\n\n/**\n * @constant\n * @name minutesInDay\n * @summary Minutes in 1 day.\n */\nconst minutesInDay = 1440;\n\n/**\n * @constant\n * @name minutesInHour\n * @summary Minutes in 1 hour.\n */\nconst minutesInHour = 60;\n\n/**\n * @constant\n * @name monthsInQuarter\n * @summary Months in 1 quarter.\n */\nconst monthsInQuarter = 3;\n\n/**\n * @constant\n * @name monthsInYear\n * @summary Months in 1 year.\n */\nconst monthsInYear = 12;\n\n/**\n * @constant\n * @name quartersInYear\n * @summary Quarters in 1 year\n */\nconst quartersInYear = 4;\n\n/**\n * @constant\n * @name secondsInHour\n * @summary Seconds in 1 hour.\n */\nconst secondsInHour = 3600;\n\n/**\n * @constant\n * @name secondsInMinute\n * @summary Seconds in 1 minute.\n */\nconst secondsInMinute = 60;\n\n/**\n * @constant\n * @name secondsInDay\n * @summary Seconds in 1 day.\n */\nconst secondsInDay = secondsInHour * 24;\n\n/**\n * @constant\n * @name secondsInWeek\n * @summary Seconds in 1 week.\n */\nconst secondsInWeek = secondsInDay * 7;\n\n/**\n * @constant\n * @name secondsInYear\n * @summary Seconds in 1 year.\n */\nconst secondsInYear = secondsInDay * daysInYear;\n\n/**\n * @constant\n * @name secondsInMonth\n * @summary Seconds in 1 month\n */\nconst secondsInMonth = secondsInYear / 12;\n\n/**\n * @constant\n * @name secondsInQuarter\n * @summary Seconds in 1 quarter.\n */\nconst secondsInQuarter = secondsInMonth * 3;\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./node_modules/date-fns/constants.mjs?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/differenceInCalendarMonths.mjs":
      /*!**************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarMonths.mjs ***!
  \**************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   differenceInCalendarMonths: () => (/* binding */ differenceInCalendarMonths)\n/* harmony export */ });\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");\n\n\n/**\n * @name differenceInCalendarMonths\n * @category Month Helpers\n * @summary Get the number of calendar months between the given dates.\n *\n * @description\n * Get the number of calendar months between the given dates.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param dateLeft - The later date\n * @param dateRight - The earlier date\n *\n * @returns The number of calendar months\n *\n * @example\n * // How many calendar months are between 31 January 2014 and 1 September 2014?\n * const result = differenceInCalendarMonths(\n *   new Date(2014, 8, 1),\n *   new Date(2014, 0, 31)\n * )\n * //=> 8\n */\nfunction differenceInCalendarMonths(dateLeft, dateRight) {\n  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft);\n  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);\n\n  const yearDiff = _dateLeft.getFullYear() - _dateRight.getFullYear();\n  const monthDiff = _dateLeft.getMonth() - _dateRight.getMonth();\n\n  return yearDiff * 12 + monthDiff;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInCalendarMonths);\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./node_modules/date-fns/differenceInCalendarMonths.mjs?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/differenceInMilliseconds.mjs":
      /*!************************************************************!*\
  !*** ./node_modules/date-fns/differenceInMilliseconds.mjs ***!
  \************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   differenceInMilliseconds: () => (/* binding */ differenceInMilliseconds)\n/* harmony export */ });\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");\n\n\n/**\n * @name differenceInMilliseconds\n * @category Millisecond Helpers\n * @summary Get the number of milliseconds between the given dates.\n *\n * @description\n * Get the number of milliseconds between the given dates.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param dateLeft - The later date\n * @param dateRight - The earlier date\n *\n * @returns The number of milliseconds\n *\n * @example\n * // How many milliseconds are between\n * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?\n * const result = differenceInMilliseconds(\n *   new Date(2014, 6, 2, 12, 30, 21, 700),\n *   new Date(2014, 6, 2, 12, 30, 20, 600)\n * )\n * //=> 1100\n */\nfunction differenceInMilliseconds(dateLeft, dateRight) {\n  return +(0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft) - +(0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInMilliseconds);\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./node_modules/date-fns/differenceInMilliseconds.mjs?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/differenceInMonths.mjs":
      /*!******************************************************!*\
  !*** ./node_modules/date-fns/differenceInMonths.mjs ***!
  \******************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   differenceInMonths: () => (/* binding */ differenceInMonths)\n/* harmony export */ });\n/* harmony import */ var _compareAsc_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compareAsc.mjs */ "./node_modules/date-fns/compareAsc.mjs");\n/* harmony import */ var _differenceInCalendarMonths_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./differenceInCalendarMonths.mjs */ "./node_modules/date-fns/differenceInCalendarMonths.mjs");\n/* harmony import */ var _isLastDayOfMonth_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isLastDayOfMonth.mjs */ "./node_modules/date-fns/isLastDayOfMonth.mjs");\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");\n\n\n\n\n\n/**\n * @name differenceInMonths\n * @category Month Helpers\n * @summary Get the number of full months between the given dates.\n *\n * @description\n * Get the number of full months between the given dates using trunc as a default rounding method.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param dateLeft - The later date\n * @param dateRight - The earlier date\n *\n * @returns The number of full months\n *\n * @example\n * // How many full months are between 31 January 2014 and 1 September 2014?\n * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))\n * //=> 7\n */\nfunction differenceInMonths(dateLeft, dateRight) {\n  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft);\n  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);\n\n  const sign = (0,_compareAsc_mjs__WEBPACK_IMPORTED_MODULE_1__.compareAsc)(_dateLeft, _dateRight);\n  const difference = Math.abs(\n    (0,_differenceInCalendarMonths_mjs__WEBPACK_IMPORTED_MODULE_2__.differenceInCalendarMonths)(_dateLeft, _dateRight),\n  );\n  let result;\n\n  // Check for the difference of less than month\n  if (difference < 1) {\n    result = 0;\n  } else {\n    if (_dateLeft.getMonth() === 1 && _dateLeft.getDate() > 27) {\n      // This will check if the date is end of Feb and assign a higher end of month date\n      // to compare it with Jan\n      _dateLeft.setDate(30);\n    }\n\n    _dateLeft.setMonth(_dateLeft.getMonth() - sign * difference);\n\n    // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full\n    // If so, result must be decreased by 1 in absolute value\n    let isLastMonthNotFull = (0,_compareAsc_mjs__WEBPACK_IMPORTED_MODULE_1__.compareAsc)(_dateLeft, _dateRight) === -sign;\n\n    // Check for cases of one full calendar month\n    if (\n      (0,_isLastDayOfMonth_mjs__WEBPACK_IMPORTED_MODULE_3__.isLastDayOfMonth)((0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft)) &&\n      difference === 1 &&\n      (0,_compareAsc_mjs__WEBPACK_IMPORTED_MODULE_1__.compareAsc)(dateLeft, _dateRight) === 1\n    ) {\n      isLastMonthNotFull = false;\n    }\n\n    result = sign * (difference - Number(isLastMonthNotFull));\n  }\n\n  // Prevent negative zero\n  return result === 0 ? 0 : result;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInMonths);\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./node_modules/date-fns/differenceInMonths.mjs?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/differenceInSeconds.mjs":
      /*!*******************************************************!*\
  !*** ./node_modules/date-fns/differenceInSeconds.mjs ***!
  \*******************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   differenceInSeconds: () => (/* binding */ differenceInSeconds)\n/* harmony export */ });\n/* harmony import */ var _lib_getRoundingMethod_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/getRoundingMethod.mjs */ "./node_modules/date-fns/_lib/getRoundingMethod.mjs");\n/* harmony import */ var _differenceInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./differenceInMilliseconds.mjs */ "./node_modules/date-fns/differenceInMilliseconds.mjs");\n\n\n\n/**\n * The {@link differenceInSeconds} function options.\n */\n\n/**\n * @name differenceInSeconds\n * @category Second Helpers\n * @summary Get the number of seconds between the given dates.\n *\n * @description\n * Get the number of seconds between the given dates.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param dateLeft - The later date\n * @param dateRight - The earlier date\n * @param options - An object with options.\n *\n * @returns The number of seconds\n *\n * @example\n * // How many seconds are between\n * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?\n * const result = differenceInSeconds(\n *   new Date(2014, 6, 2, 12, 30, 20, 0),\n *   new Date(2014, 6, 2, 12, 30, 7, 999)\n * )\n * //=> 12\n */\nfunction differenceInSeconds(dateLeft, dateRight, options) {\n  const diff = (0,_differenceInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_0__.differenceInMilliseconds)(dateLeft, dateRight) / 1000;\n  return (0,_lib_getRoundingMethod_mjs__WEBPACK_IMPORTED_MODULE_1__.getRoundingMethod)(options?.roundingMethod)(diff);\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInSeconds);\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./node_modules/date-fns/differenceInSeconds.mjs?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/endOfDay.mjs":
      /*!********************************************!*\
  !*** ./node_modules/date-fns/endOfDay.mjs ***!
  \********************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   endOfDay: () => (/* binding */ endOfDay)\n/* harmony export */ });\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");\n\n\n/**\n * @name endOfDay\n * @category Day Helpers\n * @summary Return the end of a day for the given date.\n *\n * @description\n * Return the end of a day for the given date.\n * The result will be in the local timezone.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The original date\n *\n * @returns The end of a day\n *\n * @example\n * // The end of a day for 2 September 2014 11:55:00:\n * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 02 2014 23:59:59.999\n */\nfunction endOfDay(date) {\n  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);\n  _date.setHours(23, 59, 59, 999);\n  return _date;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (endOfDay);\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./node_modules/date-fns/endOfDay.mjs?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/endOfMonth.mjs":
      /*!**********************************************!*\
  !*** ./node_modules/date-fns/endOfMonth.mjs ***!
  \**********************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   endOfMonth: () => (/* binding */ endOfMonth)\n/* harmony export */ });\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");\n\n\n/**\n * @name endOfMonth\n * @category Month Helpers\n * @summary Return the end of a month for the given date.\n *\n * @description\n * Return the end of a month for the given date.\n * The result will be in the local timezone.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The original date\n *\n * @returns The end of a month\n *\n * @example\n * // The end of a month for 2 September 2014 11:55:00:\n * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Tue Sep 30 2014 23:59:59.999\n */\nfunction endOfMonth(date) {\n  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);\n  const month = _date.getMonth();\n  _date.setFullYear(_date.getFullYear(), month + 1, 0);\n  _date.setHours(23, 59, 59, 999);\n  return _date;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (endOfMonth);\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./node_modules/date-fns/endOfMonth.mjs?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/formatDistance.mjs":
      /*!**************************************************!*\
  !*** ./node_modules/date-fns/formatDistance.mjs ***!
  \**************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   formatDistance: () => (/* binding */ formatDistance)\n/* harmony export */ });\n/* harmony import */ var _compareAsc_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compareAsc.mjs */ "./node_modules/date-fns/compareAsc.mjs");\n/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");\n/* harmony import */ var _differenceInMonths_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./differenceInMonths.mjs */ "./node_modules/date-fns/differenceInMonths.mjs");\n/* harmony import */ var _differenceInSeconds_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./differenceInSeconds.mjs */ "./node_modules/date-fns/differenceInSeconds.mjs");\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");\n/* harmony import */ var _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/defaultLocale.mjs */ "./node_modules/date-fns/locale/en-US.mjs");\n/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");\n/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_lib/getTimezoneOffsetInMilliseconds.mjs */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs");\n\n\n\n\n\n\n\n\n\n/**\n * The {@link formatDistance} function options.\n */\n\n/**\n * @name formatDistance\n * @category Common Helpers\n * @summary Return the distance between the given dates in words.\n *\n * @description\n * Return the distance between the given dates in words.\n *\n * | Distance between dates                                            | Result              |\n * |-------------------------------------------------------------------|---------------------|\n * | 0 ... 30 secs                                                     | less than a minute  |\n * | 30 secs ... 1 min 30 secs                                         | 1 minute            |\n * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |\n * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |\n * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |\n * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |\n * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |\n * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |\n * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |\n * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |\n * | 1 yr ... 1 yr 3 months                                            | about 1 year        |\n * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |\n * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |\n * | N yrs ... N yrs 3 months                                          | about N years       |\n * | N yrs 3 months ... N yrs 9 months                                 | over N years        |\n * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |\n *\n * With `options.includeSeconds == true`:\n * | Distance between dates | Result               |\n * |------------------------|----------------------|\n * | 0 secs ... 5 secs      | less than 5 seconds  |\n * | 5 secs ... 10 secs     | less than 10 seconds |\n * | 10 secs ... 20 secs    | less than 20 seconds |\n * | 20 secs ... 40 secs    | half a minute        |\n * | 40 secs ... 60 secs    | less than a minute   |\n * | 60 secs ... 90 secs    | 1 minute             |\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The date\n * @param baseDate - The date to compare with\n * @param options - An object with options\n *\n * @returns The distance in words\n *\n * @throws `date` must not be Invalid Date\n * @throws `baseDate` must not be Invalid Date\n * @throws `options.locale` must contain `formatDistance` property\n *\n * @example\n * // What is the distance between 2 July 2014 and 1 January 2015?\n * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))\n * //=> \'6 months\'\n *\n * @example\n * // What is the distance between 1 January 2015 00:00:15\n * // and 1 January 2015 00:00:00, including seconds?\n * const result = formatDistance(\n *   new Date(2015, 0, 1, 0, 0, 15),\n *   new Date(2015, 0, 1, 0, 0, 0),\n *   { includeSeconds: true }\n * )\n * //=> \'less than 20 seconds\'\n *\n * @example\n * // What is the distance from 1 January 2016\n * // to 1 January 2015, with a suffix?\n * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {\n *   addSuffix: true\n * })\n * //=> \'about 1 year ago\'\n *\n * @example\n * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?\n * import { eoLocale } from \'date-fns/locale/eo\'\n * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {\n *   locale: eoLocale\n * })\n * //=> \'pli ol 1 jaro\'\n */\n\nfunction formatDistance(date, baseDate, options) {\n  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();\n  const locale = options?.locale ?? defaultOptions.locale ?? _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_1__.enUS;\n  const minutesInAlmostTwoDays = 2520;\n\n  const comparison = (0,_compareAsc_mjs__WEBPACK_IMPORTED_MODULE_2__.compareAsc)(date, baseDate);\n\n  if (isNaN(comparison)) {\n    throw new RangeError("Invalid time value");\n  }\n\n  const localizeOptions = Object.assign({}, options, {\n    addSuffix: options?.addSuffix,\n    comparison: comparison,\n  });\n\n  let dateLeft;\n  let dateRight;\n  if (comparison > 0) {\n    dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_3__.toDate)(baseDate);\n    dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_3__.toDate)(date);\n  } else {\n    dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_3__.toDate)(date);\n    dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_3__.toDate)(baseDate);\n  }\n\n  const seconds = (0,_differenceInSeconds_mjs__WEBPACK_IMPORTED_MODULE_4__.differenceInSeconds)(dateRight, dateLeft);\n  const offsetInSeconds =\n    ((0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_5__.getTimezoneOffsetInMilliseconds)(dateRight) -\n      (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_5__.getTimezoneOffsetInMilliseconds)(dateLeft)) /\n    1000;\n  const minutes = Math.round((seconds - offsetInSeconds) / 60);\n  let months;\n\n  // 0 up to 2 mins\n  if (minutes < 2) {\n    if (options?.includeSeconds) {\n      if (seconds < 5) {\n        return locale.formatDistance("lessThanXSeconds", 5, localizeOptions);\n      } else if (seconds < 10) {\n        return locale.formatDistance("lessThanXSeconds", 10, localizeOptions);\n      } else if (seconds < 20) {\n        return locale.formatDistance("lessThanXSeconds", 20, localizeOptions);\n      } else if (seconds < 40) {\n        return locale.formatDistance("halfAMinute", 0, localizeOptions);\n      } else if (seconds < 60) {\n        return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);\n      } else {\n        return locale.formatDistance("xMinutes", 1, localizeOptions);\n      }\n    } else {\n      if (minutes === 0) {\n        return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);\n      } else {\n        return locale.formatDistance("xMinutes", minutes, localizeOptions);\n      }\n    }\n\n    // 2 mins up to 0.75 hrs\n  } else if (minutes < 45) {\n    return locale.formatDistance("xMinutes", minutes, localizeOptions);\n\n    // 0.75 hrs up to 1.5 hrs\n  } else if (minutes < 90) {\n    return locale.formatDistance("aboutXHours", 1, localizeOptions);\n\n    // 1.5 hrs up to 24 hrs\n  } else if (minutes < _constants_mjs__WEBPACK_IMPORTED_MODULE_6__.minutesInDay) {\n    const hours = Math.round(minutes / 60);\n    return locale.formatDistance("aboutXHours", hours, localizeOptions);\n\n    // 1 day up to 1.75 days\n  } else if (minutes < minutesInAlmostTwoDays) {\n    return locale.formatDistance("xDays", 1, localizeOptions);\n\n    // 1.75 days up to 30 days\n  } else if (minutes < _constants_mjs__WEBPACK_IMPORTED_MODULE_6__.minutesInMonth) {\n    const days = Math.round(minutes / _constants_mjs__WEBPACK_IMPORTED_MODULE_6__.minutesInDay);\n    return locale.formatDistance("xDays", days, localizeOptions);\n\n    // 1 month up to 2 months\n  } else if (minutes < _constants_mjs__WEBPACK_IMPORTED_MODULE_6__.minutesInMonth * 2) {\n    months = Math.round(minutes / _constants_mjs__WEBPACK_IMPORTED_MODULE_6__.minutesInMonth);\n    return locale.formatDistance("aboutXMonths", months, localizeOptions);\n  }\n\n  months = (0,_differenceInMonths_mjs__WEBPACK_IMPORTED_MODULE_7__.differenceInMonths)(dateRight, dateLeft);\n\n  // 2 months up to 12 months\n  if (months < 12) {\n    const nearestMonth = Math.round(minutes / _constants_mjs__WEBPACK_IMPORTED_MODULE_6__.minutesInMonth);\n    return locale.formatDistance("xMonths", nearestMonth, localizeOptions);\n\n    // 1 year up to max Date\n  } else {\n    const monthsSinceStartOfYear = months % 12;\n    const years = Math.trunc(months / 12);\n\n    // N years up to 1 years 3 months\n    if (monthsSinceStartOfYear < 3) {\n      return locale.formatDistance("aboutXYears", years, localizeOptions);\n\n      // N years 3 months up to N years 9 months\n    } else if (monthsSinceStartOfYear < 9) {\n      return locale.formatDistance("overXYears", years, localizeOptions);\n\n      // N years 9 months up to N year 12 months\n    } else {\n      return locale.formatDistance("almostXYears", years + 1, localizeOptions);\n    }\n  }\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./node_modules/date-fns/formatDistance.mjs?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/formatDistanceToNow.mjs":
      /*!*******************************************************!*\
  !*** ./node_modules/date-fns/formatDistanceToNow.mjs ***!
  \*******************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   formatDistanceToNow: () => (/* binding */ formatDistanceToNow)\n/* harmony export */ });\n/* harmony import */ var _formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDistance.mjs */ \"./node_modules/date-fns/formatDistance.mjs\");\n\n\n/**\n * The {@link formatDistanceToNow} function options.\n */\n\n/**\n * @name formatDistanceToNow\n * @category Common Helpers\n * @summary Return the distance between the given date and now in words.\n * @pure false\n *\n * @description\n * Return the distance between the given date and now in words.\n *\n * | Distance to now                                                   | Result              |\n * |-------------------------------------------------------------------|---------------------|\n * | 0 ... 30 secs                                                     | less than a minute  |\n * | 30 secs ... 1 min 30 secs                                         | 1 minute            |\n * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |\n * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |\n * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |\n * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |\n * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |\n * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |\n * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |\n * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |\n * | 1 yr ... 1 yr 3 months                                            | about 1 year        |\n * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |\n * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |\n * | N yrs ... N yrs 3 months                                          | about N years       |\n * | N yrs 3 months ... N yrs 9 months                                 | over N years        |\n * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |\n *\n * With `options.includeSeconds == true`:\n * | Distance to now     | Result               |\n * |---------------------|----------------------|\n * | 0 secs ... 5 secs   | less than 5 seconds  |\n * | 5 secs ... 10 secs  | less than 10 seconds |\n * | 10 secs ... 20 secs | less than 20 seconds |\n * | 20 secs ... 40 secs | half a minute        |\n * | 40 secs ... 60 secs | less than a minute   |\n * | 60 secs ... 90 secs | 1 minute             |\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The given date\n * @param options - The object with options\n *\n * @returns The distance in words\n *\n * @throws `date` must not be Invalid Date\n * @throws `options.locale` must contain `formatDistance` property\n *\n * @example\n * // If today is 1 January 2015, what is the distance to 2 July 2014?\n * const result = formatDistanceToNow(\n *   new Date(2014, 6, 2)\n * )\n * //=> '6 months'\n *\n * @example\n * // If now is 1 January 2015 00:00:00,\n * // what is the distance to 1 January 2015 00:00:15, including seconds?\n * const result = formatDistanceToNow(\n *   new Date(2015, 0, 1, 0, 0, 15),\n *   {includeSeconds: true}\n * )\n * //=> 'less than 20 seconds'\n *\n * @example\n * // If today is 1 January 2015,\n * // what is the distance to 1 January 2016, with a suffix?\n * const result = formatDistanceToNow(\n *   new Date(2016, 0, 1),\n *   {addSuffix: true}\n * )\n * //=> 'in about 1 year'\n *\n * @example\n * // If today is 1 January 2015,\n * // what is the distance to 1 August 2016 in Esperanto?\n * const eoLocale = require('date-fns/locale/eo')\n * const result = formatDistanceToNow(\n *   new Date(2016, 7, 1),\n *   {locale: eoLocale}\n * )\n * //=> 'pli ol 1 jaro'\n */\nfunction formatDistanceToNow(date, options) {\n  return (0,_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__.formatDistance)(date, Date.now(), options);\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistanceToNow);\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./node_modules/date-fns/formatDistanceToNow.mjs?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/isLastDayOfMonth.mjs":
      /*!****************************************************!*\
  !*** ./node_modules/date-fns/isLastDayOfMonth.mjs ***!
  \****************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   isLastDayOfMonth: () => (/* binding */ isLastDayOfMonth)\n/* harmony export */ });\n/* harmony import */ var _endOfDay_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endOfDay.mjs */ "./node_modules/date-fns/endOfDay.mjs");\n/* harmony import */ var _endOfMonth_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./endOfMonth.mjs */ "./node_modules/date-fns/endOfMonth.mjs");\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");\n\n\n\n\n/**\n * @name isLastDayOfMonth\n * @category Month Helpers\n * @summary Is the given date the last day of a month?\n *\n * @description\n * Is the given date the last day of a month?\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The date to check\n\n * @returns The date is the last day of a month\n *\n * @example\n * // Is 28 February 2014 the last day of a month?\n * const result = isLastDayOfMonth(new Date(2014, 1, 28))\n * //=> true\n */\nfunction isLastDayOfMonth(date) {\n  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);\n  return +(0,_endOfDay_mjs__WEBPACK_IMPORTED_MODULE_1__.endOfDay)(_date) === +(0,_endOfMonth_mjs__WEBPACK_IMPORTED_MODULE_2__.endOfMonth)(_date);\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isLastDayOfMonth);\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./node_modules/date-fns/isLastDayOfMonth.mjs?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/isSameWeek.mjs":
      /*!**********************************************!*\
  !*** ./node_modules/date-fns/isSameWeek.mjs ***!
  \**********************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   isSameWeek: () => (/* binding */ isSameWeek)\n/* harmony export */ });\n/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");\n\n\n/**\n * The {@link isSameWeek} function options.\n */\n\n/**\n * @name isSameWeek\n * @category Week Helpers\n * @summary Are the given dates in the same week (and month and year)?\n *\n * @description\n * Are the given dates in the same week (and month and year)?\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param dateLeft - The first date to check\n * @param dateRight - The second date to check\n * @param options - An object with options\n *\n * @returns The dates are in the same week (and month and year)\n *\n * @example\n * // Are 31 August 2014 and 4 September 2014 in the same week?\n * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))\n * //=> true\n *\n * @example\n * // If week starts with Monday,\n * // are 31 August 2014 and 4 September 2014 in the same week?\n * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {\n *   weekStartsOn: 1\n * })\n * //=> false\n *\n * @example\n * // Are 1 January 2014 and 1 January 2015 in the same week?\n * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))\n * //=> false\n */\nfunction isSameWeek(dateLeft, dateRight, options) {\n  const dateLeftStartOfWeek = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(dateLeft, options);\n  const dateRightStartOfWeek = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(dateRight, options);\n\n  return +dateLeftStartOfWeek === +dateRightStartOfWeek;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isSameWeek);\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./node_modules/date-fns/isSameWeek.mjs?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs":
      /*!*****************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildFormatLongFn: () => (/* binding */ buildFormatLongFn)\n/* harmony export */ });\nfunction buildFormatLongFn(args) {\n  return (options = {}) => {\n    // TODO: Remove String()\n    const width = options.width ? String(options.width) : args.defaultWidth;\n    const format = args.formats[width] || args.formats[args.defaultWidth];\n    return format;\n  };\n}\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs":
      /*!***************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs ***!
  \***************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildLocalizeFn: () => (/* binding */ buildLocalizeFn)\n/* harmony export */ });\n/* eslint-disable no-unused-vars */\n\n/**\n * The localize function argument callback which allows to convert raw value to\n * the actual type.\n *\n * @param value - The value to convert\n *\n * @returns The converted value\n */\n\n/**\n * The map of localized values for each width.\n */\n\n/**\n * The index type of the locale unit value. It types conversion of units of\n * values that don\'t start at 0 (i.e. quarters).\n */\n\n/**\n * Converts the unit value to the tuple of values.\n */\n\n/**\n * The tuple of localized era values. The first element represents BC,\n * the second element represents AD.\n */\n\n/**\n * The tuple of localized quarter values. The first element represents Q1.\n */\n\n/**\n * The tuple of localized day values. The first element represents Sunday.\n */\n\n/**\n * The tuple of localized month values. The first element represents January.\n */\n\nfunction buildLocalizeFn(args) {\n  return (value, options) => {\n    const context = options?.context ? String(options.context) : "standalone";\n\n    let valuesArray;\n    if (context === "formatting" && args.formattingValues) {\n      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;\n      const width = options?.width ? String(options.width) : defaultWidth;\n\n      valuesArray =\n        args.formattingValues[width] || args.formattingValues[defaultWidth];\n    } else {\n      const defaultWidth = args.defaultWidth;\n      const width = options?.width ? String(options.width) : args.defaultWidth;\n\n      valuesArray = args.values[width] || args.values[defaultWidth];\n    }\n    const index = args.argumentCallback ? args.argumentCallback(value) : value;\n\n    // @ts-expect-error - For some reason TypeScript just don\'t want to match it, no matter how hard we try. I challenge you to try to remove it!\n    return valuesArray[index];\n  };\n}\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs":
      /*!************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchFn.mjs ***!
  \************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildMatchFn: () => (/* binding */ buildMatchFn)\n/* harmony export */ });\nfunction buildMatchFn(args) {\n  return (string, options = {}) => {\n    const width = options.width;\n\n    const matchPattern =\n      (width && args.matchPatterns[width]) ||\n      args.matchPatterns[args.defaultMatchWidth];\n    const matchResult = string.match(matchPattern);\n\n    if (!matchResult) {\n      return null;\n    }\n    const matchedString = matchResult[0];\n\n    const parsePatterns =\n      (width && args.parsePatterns[width]) ||\n      args.parsePatterns[args.defaultParseWidth];\n\n    const key = Array.isArray(parsePatterns)\n      ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString))\n      : // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type\n        findKey(parsePatterns, (pattern) => pattern.test(matchedString));\n\n    let value;\n\n    value = args.valueCallback ? args.valueCallback(key) : key;\n    value = options.valueCallback\n      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type\n        options.valueCallback(value)\n      : value;\n\n    const rest = string.slice(matchedString.length);\n\n    return { value, rest };\n  };\n}\n\nfunction findKey(object, predicate) {\n  for (const key in object) {\n    if (\n      Object.prototype.hasOwnProperty.call(object, key) &&\n      predicate(object[key])\n    ) {\n      return key;\n    }\n  }\n  return undefined;\n}\n\nfunction findIndex(array, predicate) {\n  for (let key = 0; key < array.length; key++) {\n    if (predicate(array[key])) {\n      return key;\n    }\n  }\n  return undefined;\n}\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./node_modules/date-fns/locale/_lib/buildMatchFn.mjs?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs":
      /*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs ***!
  \*******************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildMatchPatternFn: () => (/* binding */ buildMatchPatternFn)\n/* harmony export */ });\nfunction buildMatchPatternFn(args) {\n  return (string, options = {}) => {\n    const matchResult = string.match(args.matchPattern);\n    if (!matchResult) return null;\n    const matchedString = matchResult[0];\n\n    const parseResult = string.match(args.parsePattern);\n    if (!parseResult) return null;\n    let value = args.valueCallback\n      ? args.valueCallback(parseResult[0])\n      : parseResult[0];\n\n    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type\n    value = options.valueCallback ? options.valueCallback(value) : value;\n\n    const rest = string.slice(matchedString.length);\n\n    return { value, rest };\n  };\n}\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/locale/en-US.mjs":
      /*!************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US.mjs ***!
  \************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   enUS: () => (/* binding */ enUS)\n/* harmony export */ });\n/* harmony import */ var _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en-US/_lib/formatDistance.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs");\n/* harmony import */ var _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en-US/_lib/formatLong.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs");\n/* harmony import */ var _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en-US/_lib/formatRelative.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs");\n/* harmony import */ var _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en-US/_lib/localize.mjs */ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs");\n/* harmony import */ var _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./en-US/_lib/match.mjs */ "./node_modules/date-fns/locale/en-US/_lib/match.mjs");\n\n\n\n\n\n\n/**\n * @category Locales\n * @summary English locale (United States).\n * @language English\n * @iso-639-2 eng\n * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)\n * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)\n */\nconst enUS = {\n  code: "en-US",\n  formatDistance: _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__.formatDistance,\n  formatLong: _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__.formatLong,\n  formatRelative: _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__.formatRelative,\n  localize: _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__.localize,\n  match: _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__.match,\n  options: {\n    weekStartsOn: 0 /* Sunday */,\n    firstWeekContainsDate: 1,\n  },\n};\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enUS);\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./node_modules/date-fns/locale/en-US.mjs?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs":
      /*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs ***!
  \********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatDistance: () => (/* binding */ formatDistance)\n/* harmony export */ });\nconst formatDistanceLocale = {\n  lessThanXSeconds: {\n    one: "less than a second",\n    other: "less than {{count}} seconds",\n  },\n\n  xSeconds: {\n    one: "1 second",\n    other: "{{count}} seconds",\n  },\n\n  halfAMinute: "half a minute",\n\n  lessThanXMinutes: {\n    one: "less than a minute",\n    other: "less than {{count}} minutes",\n  },\n\n  xMinutes: {\n    one: "1 minute",\n    other: "{{count}} minutes",\n  },\n\n  aboutXHours: {\n    one: "about 1 hour",\n    other: "about {{count}} hours",\n  },\n\n  xHours: {\n    one: "1 hour",\n    other: "{{count}} hours",\n  },\n\n  xDays: {\n    one: "1 day",\n    other: "{{count}} days",\n  },\n\n  aboutXWeeks: {\n    one: "about 1 week",\n    other: "about {{count}} weeks",\n  },\n\n  xWeeks: {\n    one: "1 week",\n    other: "{{count}} weeks",\n  },\n\n  aboutXMonths: {\n    one: "about 1 month",\n    other: "about {{count}} months",\n  },\n\n  xMonths: {\n    one: "1 month",\n    other: "{{count}} months",\n  },\n\n  aboutXYears: {\n    one: "about 1 year",\n    other: "about {{count}} years",\n  },\n\n  xYears: {\n    one: "1 year",\n    other: "{{count}} years",\n  },\n\n  overXYears: {\n    one: "over 1 year",\n    other: "over {{count}} years",\n  },\n\n  almostXYears: {\n    one: "almost 1 year",\n    other: "almost {{count}} years",\n  },\n};\n\nconst formatDistance = (token, count, options) => {\n  let result;\n\n  const tokenValue = formatDistanceLocale[token];\n  if (typeof tokenValue === "string") {\n    result = tokenValue;\n  } else if (count === 1) {\n    result = tokenValue.one;\n  } else {\n    result = tokenValue.other.replace("{{count}}", count.toString());\n  }\n\n  if (options?.addSuffix) {\n    if (options.comparison && options.comparison > 0) {\n      return "in " + result;\n    } else {\n      return result + " ago";\n    }\n  }\n\n  return result;\n};\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs":
      /*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs ***!
  \****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatLong: () => (/* binding */ formatLong)\n/* harmony export */ });\n/* harmony import */ var _lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildFormatLongFn.mjs */ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs");\n\n\nconst dateFormats = {\n  full: "EEEE, MMMM do, y",\n  long: "MMMM do, y",\n  medium: "MMM d, y",\n  short: "MM/dd/yyyy",\n};\n\nconst timeFormats = {\n  full: "h:mm:ss a zzzz",\n  long: "h:mm:ss a z",\n  medium: "h:mm:ss a",\n  short: "h:mm a",\n};\n\nconst dateTimeFormats = {\n  full: "{{date}} \'at\' {{time}}",\n  long: "{{date}} \'at\' {{time}}",\n  medium: "{{date}}, {{time}}",\n  short: "{{date}}, {{time}}",\n};\n\nconst formatLong = {\n  date: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({\n    formats: dateFormats,\n    defaultWidth: "full",\n  }),\n\n  time: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({\n    formats: timeFormats,\n    defaultWidth: "full",\n  }),\n\n  dateTime: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({\n    formats: dateTimeFormats,\n    defaultWidth: "full",\n  }),\n};\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs":
      /*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs ***!
  \********************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatRelative: () => (/* binding */ formatRelative)\n/* harmony export */ });\nconst formatRelativeLocale = {\n  lastWeek: \"'last' eeee 'at' p\",\n  yesterday: \"'yesterday at' p\",\n  today: \"'today at' p\",\n  tomorrow: \"'tomorrow at' p\",\n  nextWeek: \"eeee 'at' p\",\n  other: \"P\",\n};\n\nconst formatRelative = (token, _date, _baseDate, _options) =>\n  formatRelativeLocale[token];\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs?"
        );

        /***/
      },

    /***/ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs":
      /*!**************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/localize.mjs ***!
  \**************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   localize: () => (/* binding */ localize)\n/* harmony export */ });\n/* harmony import */ var _lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildLocalizeFn.mjs */ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs");\n\n\nconst eraValues = {\n  narrow: ["B", "A"],\n  abbreviated: ["BC", "AD"],\n  wide: ["Before Christ", "Anno Domini"],\n};\n\nconst quarterValues = {\n  narrow: ["1", "2", "3", "4"],\n  abbreviated: ["Q1", "Q2", "Q3", "Q4"],\n  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],\n};\n\n// Note: in English, the names of days of the week and months are capitalized.\n// If you are making a new locale based on this one, check if the same is true for the language you\'re working on.\n// Generally, formatted dates should look like they are in the middle of a sentence,\n// e.g. in Spanish language the weekdays and months should be in the lowercase.\nconst monthValues = {\n  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],\n  abbreviated: [\n    "Jan",\n    "Feb",\n    "Mar",\n    "Apr",\n    "May",\n    "Jun",\n    "Jul",\n    "Aug",\n    "Sep",\n    "Oct",\n    "Nov",\n    "Dec",\n  ],\n\n  wide: [\n    "January",\n    "February",\n    "March",\n    "April",\n    "May",\n    "June",\n    "July",\n    "August",\n    "September",\n    "October",\n    "November",\n    "December",\n  ],\n};\n\nconst dayValues = {\n  narrow: ["S", "M", "T", "W", "T", "F", "S"],\n  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],\n  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],\n  wide: [\n    "Sunday",\n    "Monday",\n    "Tuesday",\n    "Wednesday",\n    "Thursday",\n    "Friday",\n    "Saturday",\n  ],\n};\n\nconst dayPeriodValues = {\n  narrow: {\n    am: "a",\n    pm: "p",\n    midnight: "mi",\n    noon: "n",\n    morning: "morning",\n    afternoon: "afternoon",\n    evening: "evening",\n    night: "night",\n  },\n  abbreviated: {\n    am: "AM",\n    pm: "PM",\n    midnight: "midnight",\n    noon: "noon",\n    morning: "morning",\n    afternoon: "afternoon",\n    evening: "evening",\n    night: "night",\n  },\n  wide: {\n    am: "a.m.",\n    pm: "p.m.",\n    midnight: "midnight",\n    noon: "noon",\n    morning: "morning",\n    afternoon: "afternoon",\n    evening: "evening",\n    night: "night",\n  },\n};\n\nconst formattingDayPeriodValues = {\n  narrow: {\n    am: "a",\n    pm: "p",\n    midnight: "mi",\n    noon: "n",\n    morning: "in the morning",\n    afternoon: "in the afternoon",\n    evening: "in the evening",\n    night: "at night",\n  },\n  abbreviated: {\n    am: "AM",\n    pm: "PM",\n    midnight: "midnight",\n    noon: "noon",\n    morning: "in the morning",\n    afternoon: "in the afternoon",\n    evening: "in the evening",\n    night: "at night",\n  },\n  wide: {\n    am: "a.m.",\n    pm: "p.m.",\n    midnight: "midnight",\n    noon: "noon",\n    morning: "in the morning",\n    afternoon: "in the afternoon",\n    evening: "in the evening",\n    night: "at night",\n  },\n};\n\nconst ordinalNumber = (dirtyNumber, _options) => {\n  const number = Number(dirtyNumber);\n\n  // If ordinal numbers depend on context, for example,\n  // if they are different for different grammatical genders,\n  // use `options.unit`.\n  //\n  // `unit` can be \'year\', \'quarter\', \'month\', \'week\', \'date\', \'dayOfYear\',\n  // \'day\', \'hour\', \'minute\', \'second\'.\n\n  const rem100 = number % 100;\n  if (rem100 > 20 || rem100 < 10) {\n    switch (rem100 % 10) {\n      case 1:\n        return number + "st";\n      case 2:\n        return number + "nd";\n      case 3:\n        return number + "rd";\n    }\n  }\n  return number + "th";\n};\n\nconst localize = {\n  ordinalNumber,\n\n  era: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({\n    values: eraValues,\n    defaultWidth: "wide",\n  }),\n\n  quarter: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({\n    values: quarterValues,\n    defaultWidth: "wide",\n    argumentCallback: (quarter) => quarter - 1,\n  }),\n\n  month: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({\n    values: monthValues,\n    defaultWidth: "wide",\n  }),\n\n  day: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({\n    values: dayValues,\n    defaultWidth: "wide",\n  }),\n\n  dayPeriod: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({\n    values: dayPeriodValues,\n    defaultWidth: "wide",\n    formattingValues: formattingDayPeriodValues,\n    defaultFormattingWidth: "wide",\n  }),\n};\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./node_modules/date-fns/locale/en-US/_lib/localize.mjs?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/locale/en-US/_lib/match.mjs":
      /*!***********************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/match.mjs ***!
  \***********************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   match: () => (/* binding */ match)\n/* harmony export */ });\n/* harmony import */ var _lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_lib/buildMatchFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs");\n/* harmony import */ var _lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildMatchPatternFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs");\n\n\n\nconst matchOrdinalNumberPattern = /^(\\d+)(th|st|nd|rd)?/i;\nconst parseOrdinalNumberPattern = /\\d+/i;\n\nconst matchEraPatterns = {\n  narrow: /^(b|a)/i,\n  abbreviated: /^(b\\.?\\s?c\\.?|b\\.?\\s?c\\.?\\s?e\\.?|a\\.?\\s?d\\.?|c\\.?\\s?e\\.?)/i,\n  wide: /^(before christ|before common era|anno domini|common era)/i,\n};\nconst parseEraPatterns = {\n  any: [/^b/i, /^(a|c)/i],\n};\n\nconst matchQuarterPatterns = {\n  narrow: /^[1234]/i,\n  abbreviated: /^q[1234]/i,\n  wide: /^[1234](th|st|nd|rd)? quarter/i,\n};\nconst parseQuarterPatterns = {\n  any: [/1/i, /2/i, /3/i, /4/i],\n};\n\nconst matchMonthPatterns = {\n  narrow: /^[jfmasond]/i,\n  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,\n  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,\n};\nconst parseMonthPatterns = {\n  narrow: [\n    /^j/i,\n    /^f/i,\n    /^m/i,\n    /^a/i,\n    /^m/i,\n    /^j/i,\n    /^j/i,\n    /^a/i,\n    /^s/i,\n    /^o/i,\n    /^n/i,\n    /^d/i,\n  ],\n\n  any: [\n    /^ja/i,\n    /^f/i,\n    /^mar/i,\n    /^ap/i,\n    /^may/i,\n    /^jun/i,\n    /^jul/i,\n    /^au/i,\n    /^s/i,\n    /^o/i,\n    /^n/i,\n    /^d/i,\n  ],\n};\n\nconst matchDayPatterns = {\n  narrow: /^[smtwf]/i,\n  short: /^(su|mo|tu|we|th|fr|sa)/i,\n  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,\n  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,\n};\nconst parseDayPatterns = {\n  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],\n  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],\n};\n\nconst matchDayPeriodPatterns = {\n  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,\n  any: /^([ap]\\.?\\s?m\\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,\n};\nconst parseDayPeriodPatterns = {\n  any: {\n    am: /^a/i,\n    pm: /^p/i,\n    midnight: /^mi/i,\n    noon: /^no/i,\n    morning: /morning/i,\n    afternoon: /afternoon/i,\n    evening: /evening/i,\n    night: /night/i,\n  },\n};\n\nconst match = {\n  ordinalNumber: (0,_lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildMatchPatternFn)({\n    matchPattern: matchOrdinalNumberPattern,\n    parsePattern: parseOrdinalNumberPattern,\n    valueCallback: (value) => parseInt(value, 10),\n  }),\n\n  era: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({\n    matchPatterns: matchEraPatterns,\n    defaultMatchWidth: "wide",\n    parsePatterns: parseEraPatterns,\n    defaultParseWidth: "any",\n  }),\n\n  quarter: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({\n    matchPatterns: matchQuarterPatterns,\n    defaultMatchWidth: "wide",\n    parsePatterns: parseQuarterPatterns,\n    defaultParseWidth: "any",\n    valueCallback: (index) => index + 1,\n  }),\n\n  month: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({\n    matchPatterns: matchMonthPatterns,\n    defaultMatchWidth: "wide",\n    parsePatterns: parseMonthPatterns,\n    defaultParseWidth: "any",\n  }),\n\n  day: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({\n    matchPatterns: matchDayPatterns,\n    defaultMatchWidth: "wide",\n    parsePatterns: parseDayPatterns,\n    defaultParseWidth: "any",\n  }),\n\n  dayPeriod: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({\n    matchPatterns: matchDayPeriodPatterns,\n    defaultMatchWidth: "any",\n    parsePatterns: parseDayPeriodPatterns,\n    defaultParseWidth: "any",\n  }),\n};\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./node_modules/date-fns/locale/en-US/_lib/match.mjs?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/locale/ru.mjs":
      /*!*********************************************!*\
  !*** ./node_modules/date-fns/locale/ru.mjs ***!
  \*********************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   ru: () => (/* binding */ ru)\n/* harmony export */ });\n/* harmony import */ var _ru_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ru/_lib/formatDistance.mjs */ "./node_modules/date-fns/locale/ru/_lib/formatDistance.mjs");\n/* harmony import */ var _ru_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ru/_lib/formatLong.mjs */ "./node_modules/date-fns/locale/ru/_lib/formatLong.mjs");\n/* harmony import */ var _ru_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ru/_lib/formatRelative.mjs */ "./node_modules/date-fns/locale/ru/_lib/formatRelative.mjs");\n/* harmony import */ var _ru_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ru/_lib/localize.mjs */ "./node_modules/date-fns/locale/ru/_lib/localize.mjs");\n/* harmony import */ var _ru_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ru/_lib/match.mjs */ "./node_modules/date-fns/locale/ru/_lib/match.mjs");\n\n\n\n\n\n\n/**\n * @category Locales\n * @summary Russian locale.\n * @language Russian\n * @iso-639-2 rus\n * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)\n * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)\n */\nconst ru = {\n  code: "ru",\n  formatDistance: _ru_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__.formatDistance,\n  formatLong: _ru_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__.formatLong,\n  formatRelative: _ru_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__.formatRelative,\n  localize: _ru_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__.localize,\n  match: _ru_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__.match,\n  options: {\n    weekStartsOn: 1 /* Monday */,\n    firstWeekContainsDate: 1,\n  },\n};\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ru);\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./node_modules/date-fns/locale/ru.mjs?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/locale/ru/_lib/formatDistance.mjs":
      /*!*****************************************************************!*\
  !*** ./node_modules/date-fns/locale/ru/_lib/formatDistance.mjs ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatDistance: () => (/* binding */ formatDistance)\n/* harmony export */ });\nfunction declension(scheme, count) {\n  // scheme for count=1 exists\n  if (scheme.one !== undefined && count === 1) {\n    return scheme.one;\n  }\n\n  const rem10 = count % 10;\n  const rem100 = count % 100;\n\n  // 1, 21, 31, ...\n  if (rem10 === 1 && rem100 !== 11) {\n    return scheme.singularNominative.replace("{{count}}", String(count));\n\n    // 2, 3, 4, 22, 23, 24, 32 ...\n  } else if (rem10 >= 2 && rem10 <= 4 && (rem100 < 10 || rem100 > 20)) {\n    return scheme.singularGenitive.replace("{{count}}", String(count));\n\n    // 5, 6, 7, 8, 9, 10, 11, ...\n  } else {\n    return scheme.pluralGenitive.replace("{{count}}", String(count));\n  }\n}\n\nfunction buildLocalizeTokenFn(scheme) {\n  return (count, options) => {\n    if (options?.addSuffix) {\n      if (options.comparison && options.comparison > 0) {\n        if (scheme.future) {\n          return declension(scheme.future, count);\n        } else {\n          return "через " + declension(scheme.regular, count);\n        }\n      } else {\n        if (scheme.past) {\n          return declension(scheme.past, count);\n        } else {\n          return declension(scheme.regular, count) + " назад";\n        }\n      }\n    } else {\n      return declension(scheme.regular, count);\n    }\n  };\n}\n\nconst formatDistanceLocale = {\n  lessThanXSeconds: buildLocalizeTokenFn({\n    regular: {\n      one: "меньше секунды",\n      singularNominative: "меньше {{count}} секунды",\n      singularGenitive: "меньше {{count}} секунд",\n      pluralGenitive: "меньше {{count}} секунд",\n    },\n    future: {\n      one: "меньше, чем через секунду",\n      singularNominative: "меньше, чем через {{count}} секунду",\n      singularGenitive: "меньше, чем через {{count}} секунды",\n      pluralGenitive: "меньше, чем через {{count}} секунд",\n    },\n  }),\n\n  xSeconds: buildLocalizeTokenFn({\n    regular: {\n      singularNominative: "{{count}} секунда",\n      singularGenitive: "{{count}} секунды",\n      pluralGenitive: "{{count}} секунд",\n    },\n    past: {\n      singularNominative: "{{count}} секунду назад",\n      singularGenitive: "{{count}} секунды назад",\n      pluralGenitive: "{{count}} секунд назад",\n    },\n    future: {\n      singularNominative: "через {{count}} секунду",\n      singularGenitive: "через {{count}} секунды",\n      pluralGenitive: "через {{count}} секунд",\n    },\n  }),\n\n  halfAMinute: (_count, options) => {\n    if (options?.addSuffix) {\n      if (options.comparison && options.comparison > 0) {\n        return "через полминуты";\n      } else {\n        return "полминуты назад";\n      }\n    }\n\n    return "полминуты";\n  },\n\n  lessThanXMinutes: buildLocalizeTokenFn({\n    regular: {\n      one: "меньше минуты",\n      singularNominative: "меньше {{count}} минуты",\n      singularGenitive: "меньше {{count}} минут",\n      pluralGenitive: "меньше {{count}} минут",\n    },\n    future: {\n      one: "меньше, чем через минуту",\n      singularNominative: "меньше, чем через {{count}} минуту",\n      singularGenitive: "меньше, чем через {{count}} минуты",\n      pluralGenitive: "меньше, чем через {{count}} минут",\n    },\n  }),\n\n  xMinutes: buildLocalizeTokenFn({\n    regular: {\n      singularNominative: "{{count}} минута",\n      singularGenitive: "{{count}} минуты",\n      pluralGenitive: "{{count}} минут",\n    },\n    past: {\n      singularNominative: "{{count}} минуту назад",\n      singularGenitive: "{{count}} минуты назад",\n      pluralGenitive: "{{count}} минут назад",\n    },\n    future: {\n      singularNominative: "через {{count}} минуту",\n      singularGenitive: "через {{count}} минуты",\n      pluralGenitive: "через {{count}} минут",\n    },\n  }),\n\n  aboutXHours: buildLocalizeTokenFn({\n    regular: {\n      singularNominative: "около {{count}} часа",\n      singularGenitive: "около {{count}} часов",\n      pluralGenitive: "около {{count}} часов",\n    },\n    future: {\n      singularNominative: "приблизительно через {{count}} час",\n      singularGenitive: "приблизительно через {{count}} часа",\n      pluralGenitive: "приблизительно через {{count}} часов",\n    },\n  }),\n\n  xHours: buildLocalizeTokenFn({\n    regular: {\n      singularNominative: "{{count}} час",\n      singularGenitive: "{{count}} часа",\n      pluralGenitive: "{{count}} часов",\n    },\n  }),\n\n  xDays: buildLocalizeTokenFn({\n    regular: {\n      singularNominative: "{{count}} день",\n      singularGenitive: "{{count}} дня",\n      pluralGenitive: "{{count}} дней",\n    },\n  }),\n\n  aboutXWeeks: buildLocalizeTokenFn({\n    regular: {\n      singularNominative: "около {{count}} недели",\n      singularGenitive: "около {{count}} недель",\n      pluralGenitive: "около {{count}} недель",\n    },\n    future: {\n      singularNominative: "приблизительно через {{count}} неделю",\n      singularGenitive: "приблизительно через {{count}} недели",\n      pluralGenitive: "приблизительно через {{count}} недель",\n    },\n  }),\n\n  xWeeks: buildLocalizeTokenFn({\n    regular: {\n      singularNominative: "{{count}} неделя",\n      singularGenitive: "{{count}} недели",\n      pluralGenitive: "{{count}} недель",\n    },\n  }),\n\n  aboutXMonths: buildLocalizeTokenFn({\n    regular: {\n      singularNominative: "около {{count}} месяца",\n      singularGenitive: "около {{count}} месяцев",\n      pluralGenitive: "около {{count}} месяцев",\n    },\n    future: {\n      singularNominative: "приблизительно через {{count}} месяц",\n      singularGenitive: "приблизительно через {{count}} месяца",\n      pluralGenitive: "приблизительно через {{count}} месяцев",\n    },\n  }),\n\n  xMonths: buildLocalizeTokenFn({\n    regular: {\n      singularNominative: "{{count}} месяц",\n      singularGenitive: "{{count}} месяца",\n      pluralGenitive: "{{count}} месяцев",\n    },\n  }),\n\n  aboutXYears: buildLocalizeTokenFn({\n    regular: {\n      singularNominative: "около {{count}} года",\n      singularGenitive: "около {{count}} лет",\n      pluralGenitive: "около {{count}} лет",\n    },\n    future: {\n      singularNominative: "приблизительно через {{count}} год",\n      singularGenitive: "приблизительно через {{count}} года",\n      pluralGenitive: "приблизительно через {{count}} лет",\n    },\n  }),\n\n  xYears: buildLocalizeTokenFn({\n    regular: {\n      singularNominative: "{{count}} год",\n      singularGenitive: "{{count}} года",\n      pluralGenitive: "{{count}} лет",\n    },\n  }),\n\n  overXYears: buildLocalizeTokenFn({\n    regular: {\n      singularNominative: "больше {{count}} года",\n      singularGenitive: "больше {{count}} лет",\n      pluralGenitive: "больше {{count}} лет",\n    },\n    future: {\n      singularNominative: "больше, чем через {{count}} год",\n      singularGenitive: "больше, чем через {{count}} года",\n      pluralGenitive: "больше, чем через {{count}} лет",\n    },\n  }),\n\n  almostXYears: buildLocalizeTokenFn({\n    regular: {\n      singularNominative: "почти {{count}} год",\n      singularGenitive: "почти {{count}} года",\n      pluralGenitive: "почти {{count}} лет",\n    },\n    future: {\n      singularNominative: "почти через {{count}} год",\n      singularGenitive: "почти через {{count}} года",\n      pluralGenitive: "почти через {{count}} лет",\n    },\n  }),\n};\n\nconst formatDistance = (token, count, options) => {\n  return formatDistanceLocale[token](count, options);\n};\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./node_modules/date-fns/locale/ru/_lib/formatDistance.mjs?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/locale/ru/_lib/formatLong.mjs":
      /*!*************************************************************!*\
  !*** ./node_modules/date-fns/locale/ru/_lib/formatLong.mjs ***!
  \*************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatLong: () => (/* binding */ formatLong)\n/* harmony export */ });\n/* harmony import */ var _lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildFormatLongFn.mjs */ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs");\n\n\nconst dateFormats = {\n  full: "EEEE, d MMMM y \'г.\'",\n  long: "d MMMM y \'г.\'",\n  medium: "d MMM y \'г.\'",\n  short: "dd.MM.y",\n};\n\nconst timeFormats = {\n  full: "H:mm:ss zzzz",\n  long: "H:mm:ss z",\n  medium: "H:mm:ss",\n  short: "H:mm",\n};\n\nconst dateTimeFormats = {\n  any: "{{date}}, {{time}}",\n};\n\nconst formatLong = {\n  date: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({\n    formats: dateFormats,\n    defaultWidth: "full",\n  }),\n\n  time: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({\n    formats: timeFormats,\n    defaultWidth: "full",\n  }),\n\n  dateTime: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({\n    formats: dateTimeFormats,\n    defaultWidth: "any",\n  }),\n};\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./node_modules/date-fns/locale/ru/_lib/formatLong.mjs?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/locale/ru/_lib/formatRelative.mjs":
      /*!*****************************************************************!*\
  !*** ./node_modules/date-fns/locale/ru/_lib/formatRelative.mjs ***!
  \*****************************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatRelative: () => (/* binding */ formatRelative)\n/* harmony export */ });\n/* harmony import */ var _isSameWeek_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../isSameWeek.mjs */ "./node_modules/date-fns/isSameWeek.mjs");\n\n\nconst accusativeWeekdays = [\n  "воскресенье",\n  "понедельник",\n  "вторник",\n  "среду",\n  "четверг",\n  "пятницу",\n  "субботу",\n];\n\nfunction lastWeek(day) {\n  const weekday = accusativeWeekdays[day];\n\n  switch (day) {\n    case 0:\n      return "\'в прошлое " + weekday + " в\' p";\n    case 1:\n    case 2:\n    case 4:\n      return "\'в прошлый " + weekday + " в\' p";\n    case 3:\n    case 5:\n    case 6:\n      return "\'в прошлую " + weekday + " в\' p";\n  }\n}\n\nfunction thisWeek(day) {\n  const weekday = accusativeWeekdays[day];\n\n  if (day === 2 /* Tue */) {\n    return "\'во " + weekday + " в\' p";\n  } else {\n    return "\'в " + weekday + " в\' p";\n  }\n}\n\nfunction nextWeek(day) {\n  const weekday = accusativeWeekdays[day];\n\n  switch (day) {\n    case 0:\n      return "\'в следующее " + weekday + " в\' p";\n    case 1:\n    case 2:\n    case 4:\n      return "\'в следующий " + weekday + " в\' p";\n    case 3:\n    case 5:\n    case 6:\n      return "\'в следующую " + weekday + " в\' p";\n  }\n}\n\nconst formatRelativeLocale = {\n  lastWeek: (date, baseDate, options) => {\n    const day = date.getDay();\n    if ((0,_isSameWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.isSameWeek)(date, baseDate, options)) {\n      return thisWeek(day);\n    } else {\n      return lastWeek(day);\n    }\n  },\n  yesterday: "\'вчера в\' p",\n  today: "\'сегодня в\' p",\n  tomorrow: "\'завтра в\' p",\n  nextWeek: (date, baseDate, options) => {\n    const day = date.getDay();\n    if ((0,_isSameWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.isSameWeek)(date, baseDate, options)) {\n      return thisWeek(day);\n    } else {\n      return nextWeek(day);\n    }\n  },\n  other: "P",\n};\n\nconst formatRelative = (token, date, baseDate, options) => {\n  const format = formatRelativeLocale[token];\n\n  if (typeof format === "function") {\n    return format(date, baseDate, options);\n  }\n\n  return format;\n};\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./node_modules/date-fns/locale/ru/_lib/formatRelative.mjs?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/locale/ru/_lib/localize.mjs":
      /*!***********************************************************!*\
  !*** ./node_modules/date-fns/locale/ru/_lib/localize.mjs ***!
  \***********************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   localize: () => (/* binding */ localize)\n/* harmony export */ });\n/* harmony import */ var _lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildLocalizeFn.mjs */ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs");\n\n\nconst eraValues = {\n  narrow: ["до н.э.", "н.э."],\n  abbreviated: ["до н. э.", "н. э."],\n  wide: ["до нашей эры", "нашей эры"],\n};\n\nconst quarterValues = {\n  narrow: ["1", "2", "3", "4"],\n  abbreviated: ["1-й кв.", "2-й кв.", "3-й кв.", "4-й кв."],\n  wide: ["1-й квартал", "2-й квартал", "3-й квартал", "4-й квартал"],\n};\n\nconst monthValues = {\n  narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],\n  abbreviated: [\n    "янв.",\n    "фев.",\n    "март",\n    "апр.",\n    "май",\n    "июнь",\n    "июль",\n    "авг.",\n    "сент.",\n    "окт.",\n    "нояб.",\n    "дек.",\n  ],\n\n  wide: [\n    "январь",\n    "февраль",\n    "март",\n    "апрель",\n    "май",\n    "июнь",\n    "июль",\n    "август",\n    "сентябрь",\n    "октябрь",\n    "ноябрь",\n    "декабрь",\n  ],\n};\n\nconst formattingMonthValues = {\n  narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],\n  abbreviated: [\n    "янв.",\n    "фев.",\n    "мар.",\n    "апр.",\n    "мая",\n    "июн.",\n    "июл.",\n    "авг.",\n    "сент.",\n    "окт.",\n    "нояб.",\n    "дек.",\n  ],\n\n  wide: [\n    "января",\n    "февраля",\n    "марта",\n    "апреля",\n    "мая",\n    "июня",\n    "июля",\n    "августа",\n    "сентября",\n    "октября",\n    "ноября",\n    "декабря",\n  ],\n};\n\nconst dayValues = {\n  narrow: ["В", "П", "В", "С", "Ч", "П", "С"],\n  short: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],\n  abbreviated: ["вск", "пнд", "втр", "срд", "чтв", "птн", "суб"],\n  wide: [\n    "воскресенье",\n    "понедельник",\n    "вторник",\n    "среда",\n    "четверг",\n    "пятница",\n    "суббота",\n  ],\n};\n\nconst dayPeriodValues = {\n  narrow: {\n    am: "ДП",\n    pm: "ПП",\n    midnight: "полн.",\n    noon: "полд.",\n    morning: "утро",\n    afternoon: "день",\n    evening: "веч.",\n    night: "ночь",\n  },\n  abbreviated: {\n    am: "ДП",\n    pm: "ПП",\n    midnight: "полн.",\n    noon: "полд.",\n    morning: "утро",\n    afternoon: "день",\n    evening: "веч.",\n    night: "ночь",\n  },\n  wide: {\n    am: "ДП",\n    pm: "ПП",\n    midnight: "полночь",\n    noon: "полдень",\n    morning: "утро",\n    afternoon: "день",\n    evening: "вечер",\n    night: "ночь",\n  },\n};\n\nconst formattingDayPeriodValues = {\n  narrow: {\n    am: "ДП",\n    pm: "ПП",\n    midnight: "полн.",\n    noon: "полд.",\n    morning: "утра",\n    afternoon: "дня",\n    evening: "веч.",\n    night: "ночи",\n  },\n  abbreviated: {\n    am: "ДП",\n    pm: "ПП",\n    midnight: "полн.",\n    noon: "полд.",\n    morning: "утра",\n    afternoon: "дня",\n    evening: "веч.",\n    night: "ночи",\n  },\n  wide: {\n    am: "ДП",\n    pm: "ПП",\n    midnight: "полночь",\n    noon: "полдень",\n    morning: "утра",\n    afternoon: "дня",\n    evening: "вечера",\n    night: "ночи",\n  },\n};\n\nconst ordinalNumber = (dirtyNumber, options) => {\n  const number = Number(dirtyNumber);\n  const unit = options?.unit;\n\n  let suffix;\n  if (unit === "date") {\n    suffix = "-е";\n  } else if (unit === "week" || unit === "minute" || unit === "second") {\n    suffix = "-я";\n  } else {\n    suffix = "-й";\n  }\n\n  return number + suffix;\n};\n\nconst localize = {\n  ordinalNumber,\n\n  era: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({\n    values: eraValues,\n    defaultWidth: "wide",\n  }),\n\n  quarter: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({\n    values: quarterValues,\n    defaultWidth: "wide",\n    argumentCallback: (quarter) => quarter - 1,\n  }),\n\n  month: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({\n    values: monthValues,\n    defaultWidth: "wide",\n    formattingValues: formattingMonthValues,\n    defaultFormattingWidth: "wide",\n  }),\n\n  day: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({\n    values: dayValues,\n    defaultWidth: "wide",\n  }),\n\n  dayPeriod: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({\n    values: dayPeriodValues,\n    defaultWidth: "any",\n    formattingValues: formattingDayPeriodValues,\n    defaultFormattingWidth: "wide",\n  }),\n};\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./node_modules/date-fns/locale/ru/_lib/localize.mjs?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/locale/ru/_lib/match.mjs":
      /*!********************************************************!*\
  !*** ./node_modules/date-fns/locale/ru/_lib/match.mjs ***!
  \********************************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   match: () => (/* binding */ match)\n/* harmony export */ });\n/* harmony import */ var _lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_lib/buildMatchFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs");\n/* harmony import */ var _lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildMatchPatternFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs");\n\n\n\nconst matchOrdinalNumberPattern = /^(\\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i;\nconst parseOrdinalNumberPattern = /\\d+/i;\n\nconst matchEraPatterns = {\n  narrow: /^((до )?н\\.?\\s?э\\.?)/i,\n  abbreviated: /^((до )?н\\.?\\s?э\\.?)/i,\n  wide: /^(до нашей эры|нашей эры|наша эра)/i,\n};\nconst parseEraPatterns = {\n  any: [/^д/i, /^н/i],\n};\n\nconst matchQuarterPatterns = {\n  narrow: /^[1234]/i,\n  abbreviated: /^[1234](-?[ыои]?й?)? кв.?/i,\n  wide: /^[1234](-?[ыои]?й?)? квартал/i,\n};\n\nconst parseQuarterPatterns = {\n  any: [/1/i, /2/i, /3/i, /4/i],\n};\n\nconst matchMonthPatterns = {\n  narrow: /^[яфмаисонд]/i,\n  abbreviated:\n    /^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\\.?/i,\n  wide: /^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i,\n};\n\nconst parseMonthPatterns = {\n  narrow: [\n    /^я/i,\n    /^ф/i,\n    /^м/i,\n    /^а/i,\n    /^м/i,\n    /^и/i,\n    /^и/i,\n    /^а/i,\n    /^с/i,\n    /^о/i,\n    /^н/i,\n    /^я/i,\n  ],\n\n  any: [\n    /^я/i,\n    /^ф/i,\n    /^мар/i,\n    /^ап/i,\n    /^ма[йя]/i,\n    /^июн/i,\n    /^июл/i,\n    /^ав/i,\n    /^с/i,\n    /^о/i,\n    /^н/i,\n    /^д/i,\n  ],\n};\n\nconst matchDayPatterns = {\n  narrow: /^[впсч]/i,\n  short: /^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\\.?/i,\n  abbreviated: /^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,\n  wide: /^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i,\n};\n\nconst parseDayPatterns = {\n  narrow: [/^в/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],\n  any: [/^в[ос]/i, /^п[он]/i, /^в/i, /^ср/i, /^ч/i, /^п[ят]/i, /^с[уб]/i],\n};\n\nconst matchDayPeriodPatterns = {\n  narrow: /^([дп]п|полн\\.?|полд\\.?|утр[оа]|день|дня|веч\\.?|ноч[ьи])/i,\n  abbreviated: /^([дп]п|полн\\.?|полд\\.?|утр[оа]|день|дня|веч\\.?|ноч[ьи])/i,\n  wide: /^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i,\n};\n\nconst parseDayPeriodPatterns = {\n  any: {\n    am: /^дп/i,\n    pm: /^пп/i,\n    midnight: /^полн/i,\n    noon: /^полд/i,\n    morning: /^у/i,\n    afternoon: /^д[ен]/i,\n    evening: /^в/i,\n    night: /^н/i,\n  },\n};\n\nconst match = {\n  ordinalNumber: (0,_lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildMatchPatternFn)({\n    matchPattern: matchOrdinalNumberPattern,\n    parsePattern: parseOrdinalNumberPattern,\n    valueCallback: (value) => parseInt(value, 10),\n  }),\n\n  era: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({\n    matchPatterns: matchEraPatterns,\n    defaultMatchWidth: "wide",\n    parsePatterns: parseEraPatterns,\n    defaultParseWidth: "any",\n  }),\n\n  quarter: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({\n    matchPatterns: matchQuarterPatterns,\n    defaultMatchWidth: "wide",\n    parsePatterns: parseQuarterPatterns,\n    defaultParseWidth: "any",\n    valueCallback: (index) => index + 1,\n  }),\n\n  month: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({\n    matchPatterns: matchMonthPatterns,\n    defaultMatchWidth: "wide",\n    parsePatterns: parseMonthPatterns,\n    defaultParseWidth: "any",\n  }),\n\n  day: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({\n    matchPatterns: matchDayPatterns,\n    defaultMatchWidth: "wide",\n    parsePatterns: parseDayPatterns,\n    defaultParseWidth: "any",\n  }),\n\n  dayPeriod: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({\n    matchPatterns: matchDayPeriodPatterns,\n    defaultMatchWidth: "wide",\n    parsePatterns: parseDayPeriodPatterns,\n    defaultParseWidth: "any",\n  }),\n};\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./node_modules/date-fns/locale/ru/_lib/match.mjs?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/startOfWeek.mjs":
      /*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfWeek.mjs ***!
  \***********************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   startOfWeek: () => (/* binding */ startOfWeek)\n/* harmony export */ });\n/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");\n/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");\n\n\n\n/**\n * The {@link startOfWeek} function options.\n */\n\n/**\n * @name startOfWeek\n * @category Week Helpers\n * @summary Return the start of a week for the given date.\n *\n * @description\n * Return the start of a week for the given date.\n * The result will be in the local timezone.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param date - The original date\n * @param options - An object with options\n *\n * @returns The start of a week\n *\n * @example\n * // The start of a week for 2 September 2014 11:55:00:\n * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))\n * //=> Sun Aug 31 2014 00:00:00\n *\n * @example\n * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:\n * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })\n * //=> Mon Sep 01 2014 00:00:00\n */\nfunction startOfWeek(date, options) {\n  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();\n  const weekStartsOn =\n    options?.weekStartsOn ??\n    options?.locale?.options?.weekStartsOn ??\n    defaultOptions.weekStartsOn ??\n    defaultOptions.locale?.options?.weekStartsOn ??\n    0;\n\n  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);\n  const day = _date.getDay();\n  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;\n\n  _date.setDate(_date.getDate() - diff);\n  _date.setHours(0, 0, 0, 0);\n  return _date;\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeek);\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./node_modules/date-fns/startOfWeek.mjs?'
        );

        /***/
      },

    /***/ "./node_modules/date-fns/toDate.mjs":
      /*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
      /***/ (
        __unused_webpack___webpack_module__,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   toDate: () => (/* binding */ toDate)\n/* harmony export */ });\n/**\n * @name toDate\n * @category Common Helpers\n * @summary Convert the given argument to an instance of Date.\n *\n * @description\n * Convert the given argument to an instance of Date.\n *\n * If the argument is an instance of Date, the function returns its clone.\n *\n * If the argument is a number, it is treated as a timestamp.\n *\n * If the argument is none of the above, the function returns Invalid Date.\n *\n * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.\n *\n * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).\n *\n * @param argument - The value to convert\n *\n * @returns The parsed date in the local time zone\n *\n * @example\n * // Clone the date:\n * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))\n * //=> Tue Feb 11 2014 11:30:30\n *\n * @example\n * // Convert the timestamp to date:\n * const result = toDate(1392098430000)\n * //=> Tue Feb 11 2014 11:30:30\n */\nfunction toDate(argument) {\n  const argStr = Object.prototype.toString.call(argument);\n\n  // Clone the date\n  if (\n    argument instanceof Date ||\n    (typeof argument === "object" && argStr === "[object Date]")\n  ) {\n    // Prevent the date to lose the milliseconds when passed to new Date() in IE10\n    return new argument.constructor(+argument);\n  } else if (\n    typeof argument === "number" ||\n    argStr === "[object Number]" ||\n    typeof argument === "string" ||\n    argStr === "[object String]"\n  ) {\n    // TODO: Can we get rid of as?\n    return new Date(argument);\n  } else {\n    // TODO: Can we get rid of as?\n    return new Date(NaN);\n  }\n}\n\n// Fallback for modularized imports:\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);\n\n\n//# sourceURL=webpack://webdev-cw-instapro/./node_modules/date-fns/toDate.mjs?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module is referenced by other modules so it can't be inlined
  /******/ var __webpack_exports__ = __webpack_require__("./index.js");
  /******/
  /******/
})();
