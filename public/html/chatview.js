document.addEventListener("DOMContentLoaded", () => {
    // Input Elements
    const titleInput = document.getElementById("titleInput");
    const textInput = document.getElementById("textInput");
    const bgColorInput = document.getElementById("bgColorInput");
    const textColorInput = document.getElementById("textColorInput");
    const bgColorPicker = document.getElementById("bgColorPicker");
    const textColorPicker = document.getElementById("textColorPicker");

    // Bubble Inputs
    const bubbleBgColorInput = document.getElementById("bubbleBgColorInput");
    const bubbleBgColorText = document.getElementById("bubbleBgColorText");
    const bubbleIconColorInput = document.getElementById("bubbleIconColorInput");
    const bubbleIconColorText = document.getElementById("bubbleIconColorText");
    const bubbleDotsColorInput = document.getElementById("bubbleDotsColorInput");
    const bubbleDotsColorText = document.getElementById("bubbleDotsColorText");

    // Chat Bar Inputs
    const chatBarTextInput = document.getElementById("chatBarTextInput");
    const chatBarBgColorInput = document.getElementById("chatBarBgColorInput");
    const chatBarBgColorText = document.getElementById("chatBarBgColorText");
    const chatBarTextColorInput = document.getElementById("chatBarTextColorInput");
    const chatBarTextColorText = document.getElementById("chatBarTextColorText");

    // Chat Widget Inputs
    const widgetBotMsgBgColorInput = document.getElementById("widgetBotMsgBgColorInput");
    const widgetBotMsgBgColorText = document.getElementById("widgetBotMsgBgColorText");
    const widgetUserMsgBgColorInput = document.getElementById("widgetUserMsgBgColorInput");
    const widgetUserMsgBgColorText = document.getElementById("widgetUserMsgBgColorText");
    const widgetSendBtnBgColorInput = document.getElementById("widgetSendBtnBgColorInput");
    const widgetSendBtnBgColorText = document.getElementById("widgetSendBtnBgColorText");
    const widgetSendBtnIconColorInput = document.getElementById("widgetSendBtnIconColorInput");
    const widgetSendBtnIconColorText = document.getElementById("widgetSendBtnIconColorText");
    const footerBgColorInput = document.getElementById("footerBgColorInput");
    const footerBgColorText = document.getElementById("footerBgColorText");
    const footerTextColorInput = document.getElementById("footerTextColorInput");
    const footerTextColorText = document.getElementById("footerTextColorText");

    // Chat Widget Landing Inputs
    const modalBgColorInput = document.getElementById("modalBgColorInput");
    const modalBgColorText = document.getElementById("modalBgColorText");
    const modalTitleColorInput = document.getElementById("modalTitleColorInput");
    const modalTitleColorText = document.getElementById("modalTitleColorText");
    const chatPreviewBgInput = document.getElementById("chatPreviewBgInput");
    const chatPreviewBgText = document.getElementById("chatPreviewBgText");
    const chatPreviewTextColorInput = document.getElementById("chatPreviewTextColorInput");
    const chatPreviewTextColorText = document.getElementById("chatPreviewTextColorText");
    const chatNowBtnBgInput = document.getElementById("chatNowBtnBgInput");
    const chatNowBtnBgText = document.getElementById("chatNowBtnBgText");
    const chatNowBtnTextColorInput = document.getElementById("chatNowBtnTextColorInput");
    const chatNowBtnTextColorText = document.getElementById("chatNowBtnTextColorText");
    const linkItemBgInput = document.getElementById("linkItemBgInput");
    const linkItemBgText = document.getElementById("linkItemBgText");
    const linkItemTextColorInput = document.getElementById("linkItemTextColorInput");
    const linkItemTextColorText = document.getElementById("linkItemTextColorText");

    // Preview Elements
    const eyecatcherPreviewBox = document.getElementById("eyecatcherPreviewBox");
    const eyecatcherPreviewTitle = document.getElementById("eyecatcherPreviewTitle");
    const eyecatcherPreviewText = document.getElementById("eyecatcherPreviewText");
    const bubblePreviewBox = document.getElementById("bubblePreviewBox");
    const bubbleIcon = document.getElementById("bubbleIcon");
    const bubbleDots = document.querySelectorAll(".bubble-preview .dot");
    const chatBarPreviewBox = document.getElementById("chatBarPreviewBox");
    const chatBarPreviewText = document.getElementById("chatBarPreviewText");
    const chatWidgetPreviewBox = document.getElementById("chatWidgetPreviewBox");
    const widgetMessagesPreview = document.getElementById("widgetMessagesPreview");
    const widgetMessageInput = document.getElementById("widgetMessageInput");
    const widgetSendButton = document.querySelector(".send-button");
    const chatFooter = document.querySelector(".chat-footer");
    const modalLandingBg = document.querySelector(".modal-landing-bg");
    const modalTitle = document.getElementById("modalTitle");
    const chatPreviewBg = document.querySelector(".chat-preview-bg");
    const chatPreviewTexts = document.querySelectorAll(".chat-preview-text");
    const chatNowBtnBg = document.querySelector(".chat-now-btn-bg");
    const chatNowBtnText = document.querySelector(".chat-now-btn-text");
    const linkItemsBg = document.querySelectorAll(".link-item-bg");
    const linkItemsText = document.querySelectorAll(".link-item-text");

    // Dropdown Menu Toggle
    const moreOptionsButton = document.querySelector(".more-options-button");
    const dropdownMenu = document.getElementById("dropdownMenu");

    if (moreOptionsButton) {
        moreOptionsButton.addEventListener("click", () => {
            dropdownMenu.classList.toggle("active");
        });
    }

    document.addEventListener("click", (event) => {
        if (moreOptionsButton && dropdownMenu && !moreOptionsButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("active");
        }
    });

    // Load settings from localStorage
    function loadSettings() {
        const savedSettings = localStorage.getItem("chatSettings");
        if (savedSettings) {
            const settings = JSON.parse(savedSettings);

            // Apply Eyecatcher settings
            if (titleInput) titleInput.value = settings.eyecatcher.title || "";
            if (textInput) textInput.value = settings.eyecatcher.text || "";
            if (bgColorInput) bgColorInput.value = settings.eyecatcher.bgColor || "#007bff";
            if (textColorInput) textColorInput.value = settings.eyecatcher.textColor || "#ffffff";
            if (bgColorPicker) bgColorPicker.value = bgColorInput.value;
            if (textColorPicker) textColorPicker.value = textColorInput.value;
            if (eyecatcherPreviewTitle) eyecatcherPreviewTitle.textContent = titleInput.value || "Hello";
            if (eyecatcherPreviewText) eyecatcherPreviewText.textContent = textInput.value || "Click to chat";
            if (eyecatcherPreviewBox) eyecatcherPreviewBox.style.backgroundColor = bgColorInput.value;
            if (eyecatcherPreviewBox) eyecatcherPreviewBox.style.color = textColorInput.value;

            // Apply Bubble settings
            if (bubbleBgColorText) bubbleBgColorText.value = settings.bubble.bgColor || "#ff5101";
            if (bubbleIconColorText) bubbleIconColorText.value = settings.bubble.iconColor || "#ffffff";
            if (bubbleDotsColorText) bubbleDotsColorText.value = settings.bubble.dotsColor || "#ff5101";
            if (bubbleBgColorInput) bubbleBgColorInput.value = bubbleBgColorText.value;
            if (bubbleIconColorInput) bubbleIconColorInput.value = bubbleIconColorText.value;
            if (bubbleDotsColorInput) bubbleDotsColorInput.value = bubbleDotsColorText.value;
            if (bubblePreviewBox) bubblePreviewBox.style.backgroundColor = bubbleBgColorText.value;
            if (bubbleIcon) {
                bubbleIcon.querySelectorAll("path").forEach(path => {
                    path.setAttribute("fill", bubbleIconColorText.value);
                });
            }
            bubbleDots.forEach(dot => {
                dot.style.backgroundColor = bubbleDotsColorText.value;
            });

            // Apply Chat Bar settings
            if (chatBarTextInput) chatBarTextInput.value = settings.chatBar.text || "";
            if (chatBarBgColorText) chatBarBgColorText.value = settings.chatBar.bgColor || "#007bff";
            if (chatBarTextColorText) chatBarTextColorText.value = settings.chatBar.textColor || "#ffffff";
            if (chatBarBgColorInput) chatBarBgColorInput.value = chatBarBgColorText.value;
            if (chatBarTextColorInput) chatBarTextColorInput.value = chatBarTextColorText.value;
            if (chatBarPreviewText) chatBarPreviewText.textContent = chatBarTextInput.value || "Chat with us";
            if (chatBarPreviewBox) chatBarPreviewBox.style.backgroundColor = chatBarBgColorText.value;
            if (chatBarPreviewBox) chatBarPreviewBox.style.color = chatBarTextColorText.value;

            // Apply Chat Widget settings
            if (widgetBotMsgBgColorText) widgetBotMsgBgColorText.value = settings.chatWidget.botMsgBgColor || "#f3f4f6";
            if (widgetUserMsgBgColorText) widgetUserMsgBgColorText.value = settings.chatWidget.userMsgBgColor || "#fef08a";
            if (widgetSendBtnBgColorText) widgetSendBtnBgColorText.value = settings.chatWidget.sendBtnBgColor || "#000000";
            if (widgetSendBtnIconColorText) widgetSendBtnIconColorText.value = settings.chatWidget.sendBtnIconColor || "#ffffff";
            if (footerBgColorText) footerBgColorText.value = settings.chatWidget.footerBgColor || "#ffffff";
            if (footerTextColorText) footerTextColorText.value = settings.chatWidget.footerTextColor || "#374151";
            if (modalBgColorText) modalBgColorText.value = settings.chatWidget.modalBgColor || "#d3d3d3";
            if (modalTitleColorText) modalTitleColorText.value = settings.chatWidget.modalTitleColor || "#000000";
            if (chatPreviewBgText) chatPreviewBgText.value = settings.chatWidget.chatPreviewBg || "#f3f4f6";
            if (chatPreviewTextColorText) chatPreviewTextColorText.value = settings.chatWidget.chatPreviewTextColor || "#374151";
            if (chatNowBtnBgText) chatNowBtnBgText.value = settings.chatWidget.chatNowBtnBg || "#000000";
            if (chatNowBtnTextColorText) chatNowBtnTextColorText.value = settings.chatWidget.chatNowBtnTextColor || "#ffffff";
            if (linkItemBgText) linkItemBgText.value = settings.chatWidget.linkItemBg || "#f3f4f6";
            if (linkItemTextColorText) linkItemTextColorText.value = settings.chatWidget.linkItemTextColor || "#374151";

            if (widgetBotMsgBgColorInput) widgetBotMsgBgColorInput.value = widgetBotMsgBgColorText.value;
            if (widgetUserMsgBgColorInput) widgetUserMsgBgColorInput.value = widgetUserMsgBgColorText.value;
            if (widgetSendBtnBgColorInput) widgetSendBtnBgColorInput.value = widgetSendBtnBgColorText.value;
            if (widgetSendBtnIconColorInput) widgetSendBtnIconColorInput.value = widgetSendBtnIconColorText.value;
            if (footerBgColorInput) footerBgColorInput.value = footerBgColorText.value;
            if (footerTextColorInput) footerTextColorInput.value = footerTextColorText.value;
            if (modalBgColorInput) modalBgColorInput.value = modalBgColorText.value;
            if (modalTitleColorInput) modalTitleColorInput.value = modalTitleColorText.value;
            if (chatPreviewBgInput) chatPreviewBgInput.value = chatPreviewBgText.value;
            if (chatPreviewTextColorInput) chatPreviewTextColorInput.value = chatPreviewTextColorText.value;
            if (chatNowBtnBgInput) chatNowBtnBgInput.value = chatNowBtnBgText.value;
            if (chatNowBtnTextColorInput) chatNowBtnTextColorInput.value = chatNowBtnTextColorText.value;
            if (linkItemBgInput) linkItemBgInput.value = linkItemBgText.value;
            if (linkItemTextColorInput) linkItemTextColorInput.value = linkItemTextColorText.value;

            // Apply styles to preview
            if (widgetMessagesPreview) {
                widgetMessagesPreview.querySelectorAll(".chat-message:not(.user) div").forEach(msg => {
                    msg.style.backgroundColor = widgetBotMsgBgColorText.value;
                });
                widgetMessagesPreview.querySelectorAll(".chat-message.user div").forEach(msg => {
                    msg.style.backgroundColor = widgetUserMsgBgColorText.value;
                });
            }
            if (widgetSendButton) widgetSendButton.style.backgroundColor = widgetSendBtnBgColorText.value;
            if (widgetSendButton) widgetSendButton.style.color = widgetSendBtnIconColorText.value;
            if (chatFooter) chatFooter.style.backgroundColor = footerBgColorText.value;
            if (chatFooter) chatFooter.style.color = footerTextColorText.value;
            if (modalLandingBg) modalLandingBg.style.background = `linear-gradient(to bottom, ${modalBgColorText.value}, #e8e8e8)`;
            if (modalTitle) modalTitle.style.color = modalTitleColorText.value;
            if (chatPreviewBg) chatPreviewBg.style.backgroundColor = chatPreviewBgText.value;
            if (chatPreviewTexts) {
                chatPreviewTexts.forEach(text => {
                    text.style.color = chatPreviewTextColorText.value;
                });
            }
            if (chatNowBtnBg) chatNowBtnBg.style.backgroundColor = chatNowBtnBgText.value;
            if (chatNowBtnBg) chatNowBtnBg.style.color = chatNowBtnTextColorText.value;
            if (chatNowBtnText) chatNowBtnText.style.fill = chatNowBtnTextColorText.value;
            if (linkItemsBg) {
                linkItemsBg.forEach(item => {
                    item.style.backgroundColor = linkItemBgText.value;
                });
            }
            if (linkItemsText) {
                linkItemsText.forEach(text => {
                    text.style.color = linkItemTextColorText.value;
                });
            }

            // Set selected radio button
            const selectedOption = settings.selectedOption || "eyecatcher";
            const radioInput = document.querySelector(`input[name="chat_option"][value="${selectedOption}"]`);
            if (radioInput) {
                radioInput.checked = true;
                toggleInputs(selectedOption);
            }
        }
    }

    // Save settings to localStorage
    function saveSettings() {
        const settings = {
            selectedOption: document.querySelector('input[name="chat_option"]:checked')?.value || "eyecatcher",
            eyecatcher: {
                title: titleInput?.value || "",
                text: textInput?.value || "",
                bgColor: bgColorInput?.value || "#007bff",
                textColor: textColorInput?.value || "#ffffff"
            },
            bubble: {
                bgColor: bubbleBgColorText?.value || "#ff5101",
                iconColor: bubbleIconColorText?.value || "#ffffff",
                dotsColor: bubbleDotsColorText?.value || "#ff5101"
            },
            chatBar: {
                text: chatBarTextInput?.value || "",
                bgColor: chatBarBgColorText?.value || "#007bff",
                textColor: chatBarTextColorText?.value || "#ffffff"
            },
            chatWidget: {
                botMsgBgColor: widgetBotMsgBgColorText?.value || "#f3f4f6",
                userMsgBgColor: widgetUserMsgBgColorText?.value || "#fef08a",
                sendBtnBgColor: widgetSendBtnBgColorText?.value || "#000000",
                sendBtnIconColor: widgetSendBtnIconColorText?.value || "#ffffff",
                footerBgColor: footerBgColorText?.value || "#ffffff",
                footerTextColor: footerTextColorText?.value || "#374151",
                modalBgColor: modalBgColorText?.value || "#d3d3d3",
                modalTitleColor: modalTitleColorText?.value || "#000000",
                chatPreviewBg: chatPreviewBgText?.value || "#f3f4f6",
                chatPreviewTextColor: chatPreviewTextColorText?.value || "#374151",
                chatNowBtnBg: chatNowBtnBgText?.value || "#000000",
                chatNowBtnTextColor: chatNowBtnTextColorText?.value || "#ffffff",
                linkItemBg: linkItemBgText?.value || "#f3f4f6",
                linkItemTextColor: linkItemTextColorText?.value || "#374151"
            }
        };
        localStorage.setItem("chatSettings", JSON.stringify(settings));
        alert("Settings saved!");
    }

    // Toggle input visibility based on selected radio button
    function toggleInputs(selectedOption) {
        const eyecatcherInputs = document.getElementById("eyecatcherInputs");
        const bubbleInputs = document.getElementById("bubbleInputs");
        const chatBarInputs = document.getElementById("chatBarInputs");
        const chatWidgetInputs = document.getElementById("chatWidgetInputs");
        const chatWidgetOpenInputs = document.getElementById("chatWidgetOpenInputs");
        const chatWidgetLandingInputs = document.getElementById("chatWidgetLandingInputs");
        const chatWidgetOpenContent = document.getElementById("chatWidgetOpenContent");
        const homeContent = document.getElementById("homeContent");

        if (eyecatcherInputs) eyecatcherInputs.style.display = selectedOption === "eyecatcher" ? "block" : "none";
        if (bubbleInputs) bubbleInputs.style.display = selectedOption === "bubble" ? "block" : "none";
        if (chatBarInputs) chatBarInputs.style.display = selectedOption === "chat_bar" ? "block" : "none";
        if (chatWidgetInputs) chatWidgetInputs.style.display = selectedOption.includes("chat_widget") ? "block" : "none";
        if (chatWidgetOpenInputs) chatWidgetOpenInputs.style.display = selectedOption === "chat_widget" ? "block" : "none";
        if (chatWidgetLandingInputs) chatWidgetLandingInputs.style.display = selectedOption === "chat_widget_landing" ? "block" : "none";

        if (eyecatcherPreviewBox) eyecatcherPreviewBox.style.display = selectedOption === "eyecatcher" ? "flex" : "none";
        if (bubblePreviewBox) bubblePreviewBox.style.display = selectedOption === "bubble" ? "block" : "none";
        if (chatBarPreviewBox) chatBarPreviewBox.style.display = selectedOption === "chat_bar" ? "flex" : "none";
        if (chatWidgetPreviewBox) chatWidgetPreviewBox.style.display = selectedOption.includes("chat_widget") ? "block" : "none";
        if (chatWidgetOpenContent) chatWidgetOpenContent.style.display = selectedOption === "chat_widget" ? "flex" : "none";
        if (homeContent) homeContent.style.display = selectedOption === "chat_widget_landing" ? "flex" : "none";
    }

    // Event Listeners for Eyecatcher Inputs
    if (titleInput) {
        titleInput.addEventListener("input", () => {
            if (eyecatcherPreviewTitle) eyecatcherPreviewTitle.textContent = titleInput.value || "Hello";
        });
    }
    if (textInput) {
        textInput.addEventListener("input", () => {
            if (eyecatcherPreviewText) eyecatcherPreviewText.textContent = textInput.value || "Click to chat";
        });
    }
    if (bgColorInput) {
        bgColorInput.addEventListener("input", () => {
            if (bgColorPicker) bgColorPicker.value = bgColorInput.value;
            if (eyecatcherPreviewBox) eyecatcherPreviewBox.style.backgroundColor = bgColorInput.value;
        });
    }
    if (textColorInput) {
        textColorInput.addEventListener("input", () => {
            if (textColorPicker) textColorPicker.value = textColorInput.value;
            if (eyecatcherPreviewBox) eyecatcherPreviewBox.style.color = textColorInput.value;
        });
    }
    if (bgColorPicker) {
        bgColorPicker.addEventListener("input", () => {
            if (bgColorInput) bgColorInput.value = bgColorPicker.value;
            if (eyecatcherPreviewBox) eyecatcherPreviewBox.style.backgroundColor = bgColorPicker.value;
        });
    }
    if (textColorPicker) {
        textColorPicker.addEventListener("input", () => {
            if (textColorInput) textColorInput.value = textColorPicker.value;
            if (eyecatcherPreviewBox) eyecatcherPreviewBox.style.color = textColorPicker.value;
        });
    }

    // Event Listeners for Bubble Inputs
    if (bubbleBgColorText) {
        bubbleBgColorText.addEventListener("input", () => {
            if (bubbleBgColorInput) bubbleBgColorInput.value = bubbleBgColorText.value;
            if (bubblePreviewBox) bubblePreviewBox.style.backgroundColor = bubbleBgColorText.value;
        });
    }
    if (bubbleBgColorInput) {
        bubbleBgColorInput.addEventListener("input", () => {
            if (bubbleBgColorText) bubbleBgColorText.value = bubbleBgColorInput.value;
            if (bubblePreviewBox) bubblePreviewBox.style.backgroundColor = bubbleBgColorInput.value;
        });
    }
    if (bubbleIconColorText) {
        bubbleIconColorText.addEventListener("input", () => {
            if (bubbleIconColorInput) bubbleIconColorInput.value = bubbleIconColorText.value;
            if (bubbleIcon) {
                bubbleIcon.querySelectorAll("path").forEach(path => {
                    path.setAttribute("fill", bubbleIconColorText.value);
                });
            }
        });
    }
    if (bubbleIconColorInput) {
        bubbleIconColorInput.addEventListener("input", () => {
            if (bubbleIconColorText) bubbleIconColorText.value = bubbleIconColorInput.value;
            if (bubbleIcon) {
                bubbleIcon.querySelectorAll("path").forEach(path => {
                    path.setAttribute("fill", bubbleIconColorInput.value);
                });
            }
        });
    }
    if (bubbleDotsColorText) {
        bubbleDotsColorText.addEventListener("input", () => {
            if (bubbleDotsColorInput) bubbleDotsColorInput.value = bubbleDotsColorText.value;
            bubbleDots.forEach(dot => {
                dot.style.backgroundColor = bubbleDotsColorText.value;
            });
        });
    }
    if (bubbleDotsColorInput) {
        bubbleDotsColorInput.addEventListener("input", () => {
            if (bubbleDotsColorText) bubbleDotsColorText.value = bubbleDotsColorInput.value;
            bubbleDots.forEach(dot => {
                dot.style.backgroundColor = bubbleDotsColorInput.value;
            });
        });
    }

    // Event Listeners for Chat Bar Inputs
    if (chatBarTextInput) {
        chatBarTextInput.addEventListener("input", () => {
            if (chatBarPreviewText) chatBarPreviewText.textContent = chatBarTextInput.value || "Chat with us";
        });
    }
    if (chatBarBgColorText) {
        chatBarBgColorText.addEventListener("input", () => {
            if (chatBarBgColorInput) chatBarBgColorInput.value = chatBarBgColorText.value;
            if (chatBarPreviewBox) chatBarPreviewBox.style.backgroundColor = chatBarBgColorText.value;
        });
    }
    if (chatBarBgColorInput) {
        chatBarBgColorInput.addEventListener("input", () => {
            if (chatBarBgColorText) chatBarBgColorText.value = chatBarBgColorInput.value;
            if (chatBarPreviewBox) chatBarPreviewBox.style.backgroundColor = chatBarBgColorInput.value;
        });
    }
    if (chatBarTextColorText) {
        chatBarTextColorText.addEventListener("input", () => {
            if (chatBarTextColorInput) chatBarTextColorInput.value = chatBarTextColorText.value;
            if (chatBarPreviewBox) chatBarPreviewBox.style.color = chatBarTextColorText.value;
        });
    }
    if (chatBarTextColorInput) {
        chatBarTextColorInput.addEventListener("input", () => {
            if (chatBarTextColorText) chatBarTextColorText.value = chatBarTextColorInput.value;
            if (chatBarPreviewBox) chatBarPreviewBox.style.color = chatBarTextColorInput.value;
        });
    }

    // Event Listeners for Chat Widget Inputs
    if (widgetBotMsgBgColorText) {
        widgetBotMsgBgColorText.addEventListener("input", () => {
            if (widgetBotMsgBgColorInput) widgetBotMsgBgColorInput.value = widgetBotMsgBgColorText.value;
            if (widgetMessagesPreview) {
                widgetMessagesPreview.querySelectorAll(".chat-message:not(.user) div").forEach(msg => {
                    msg.style.backgroundColor = widgetBotMsgBgColorText.value;
                });
            }
        });
    }
    if (widgetBotMsgBgColorInput) {
        widgetBotMsgBgColorInput.addEventListener("input", () => {
            if (widgetBotMsgBgColorText) widgetBotMsgBgColorText.value = widgetBotMsgBgColorInput.value;
            if (widgetMessagesPreview) {
                widgetMessagesPreview.querySelectorAll(".chat-message:not(.user) div").forEach(msg => {
                    msg.style.backgroundColor = widgetBotMsgBgColorInput.value;
                });
            }
        });
    }
    if (widgetUserMsgBgColorText) {
        widgetUserMsgBgColorText.addEventListener("input", () => {
            if (widgetUserMsgBgColorInput) widgetUserMsgBgColorInput.value = widgetUserMsgBgColorText.value;
            if (widgetMessagesPreview) {
                widgetMessagesPreview.querySelectorAll(".chat-message.user div").forEach(msg => {
                    msg.style.backgroundColor = widgetUserMsgBgColorText.value;
                });
            }
        });
    }
    if (widgetUserMsgBgColorInput) {
        widgetUserMsgBgColorInput.addEventListener("input", () => {
            if (widgetUserMsgBgColorText) widgetUserMsgBgColorText.value = widgetUserMsgBgColorInput.value;
            if (widgetMessagesPreview) {
                widgetMessagesPreview.querySelectorAll(".chat-message.user div").forEach(msg => {
                    msg.style.backgroundColor = widgetUserMsgBgColorInput.value;
                });
            }
        });
    }
    if (widgetSendBtnBgColorText) {
        widgetSendBtnBgColorText.addEventListener("input", () => {
            if (widgetSendBtnBgColorInput) widgetSendBtnBgColorInput.value = widgetSendBtnBgColorText.value;
            if (widgetSendButton) widgetSendButton.style.backgroundColor = widgetSendBtnBgColorText.value;
        });
    }
    if (widgetSendBtnBgColorInput) {
        widgetSendBtnBgColorInput.addEventListener("input", () => {
            if (widgetSendBtnBgColorText) widgetSendBtnBgColorText.value = widgetSendBtnBgColorInput.value;
            if (widgetSendButton) widgetSendButton.style.backgroundColor = widgetSendBtnBgColorInput.value;
        });
    }
    if (widgetSendBtnIconColorText) {
        widgetSendBtnIconColorText.addEventListener("input", () => {
            if (widgetSendBtnIconColorInput) widgetSendBtnIconColorInput.value = widgetSendBtnIconColorText.value;
            if (widgetSendButton) widgetSendButton.style.color = widgetSendBtnIconColorText.value;
        });
    }
    if (widgetSendBtnIconColorInput) {
        widgetSendBtnIconColorInput.addEventListener("input", () => {
            if (widgetSendBtnIconColorText) widgetSendBtnIconColorText.value = widgetSendBtnIconColorInput.value;
            if (widgetSendButton) widgetSendButton.style.color = widgetSendBtnIconColorInput.value;
        });
    }
    if (footerBgColorText) {
        footerBgColorText.addEventListener("input", () => {
            if (footerBgColorInput) footerBgColorInput.value = footerBgColorText.value;
            if (chatFooter) chatFooter.style.backgroundColor = footerBgColorText.value;
        });
    }
    if (footerBgColorInput) {
        footerBgColorInput.addEventListener("input", () => {
            if (footerBgColorText) footerBgColorText.value = footerBgColorInput.value;
            if (chatFooter) chatFooter.style.backgroundColor = footerBgColorInput.value;
        });
    }
    if (footerTextColorText) {
        footerTextColorText.addEventListener("input", () => {
            if (footerTextColorInput) footerTextColorInput.value = footerTextColorText.value;
            if (chatFooter) chatFooter.style.color = footerTextColorText.value;
        });
    }
    if (footerTextColorInput) {
        footerTextColorInput.addEventListener("input", () => {
            if (footerTextColorText) footerTextColorText.value = footerTextColorInput.value;
            if (chatFooter) chatFooter.style.color = footerTextColorInput.value;
        });
    }

    // Event Listeners for Chat Widget Landing Inputs
    if (modalBgColorText) {
        modalBgColorText.addEventListener("input", () => {
            if (modalBgColorInput) modalBgColorInput.value = modalBgColorText.value;
            if (modalLandingBg) modalLandingBg.style.background = `linear-gradient(to bottom, ${modalBgColorText.value}, #e8e8e8)`;
        });
    }
    if (modalBgColorInput) {
        modalBgColorInput.addEventListener("input", () => {
            if (modalBgColorText) modalBgColorText.value = modalBgColorInput.value;
            if (modalLandingBg) modalLandingBg.style.background = `linear-gradient(to bottom, ${modalBgColorInput.value}, #e8e8e8)`;
        });
    }
    if (modalTitleColorText) {
        modalTitleColorText.addEventListener("input", () => {
            if (modalTitleColorInput) modalTitleColorInput.value = modalTitleColorText.value;
            if (modalTitle) modalTitle.style.color = modalTitleColorText.value;
        });
    }
    if (modalTitleColorInput) {
        modalTitleColorInput.addEventListener("input", () => {
            if (modalTitleColorText) modalTitleColorText.value = modalTitleColorInput.value;
            if (modalTitle) modalTitle.style.color = modalTitleColorInput.value;
        });
    }
    if (chatPreviewBgText) {
        chatPreviewBgText.addEventListener("input", () => {
            if (chatPreviewBgInput) chatPreviewBgInput.value = chatPreviewBgText.value;
            if (chatPreviewBg) chatPreviewBg.style.backgroundColor = chatPreviewBgText.value;
        });
    }
    if (chatPreviewBgInput) {
        chatPreviewBgInput.addEventListener("input", () => {
            if (chatPreviewBgText) chatPreviewBgText.value = chatPreviewBgInput.value;
            if (chatPreviewBg) chatPreviewBg.style.backgroundColor = chatPreviewBgInput.value;
        });
    }
    if (chatPreviewTextColorText) {
        chatPreviewTextColorText.addEventListener("input", () => {
            if (chatPreviewTextColorInput) chatPreviewTextColorInput.value = chatPreviewTextColorText.value;
            if (chatPreviewTexts) {
                chatPreviewTexts.forEach(text => {
                    text.style.color = chatPreviewTextColorText.value;
                });
            }
        });
    }
    if (chatPreviewTextColorInput) {
        chatPreviewTextColorInput.addEventListener("input", () => {
            if (chatPreviewTextColorText) chatPreviewTextColorText.value = chatPreviewTextColorInput.value;
            if (chatPreviewTexts) {
                chatPreviewTexts.forEach(text => {
                    text.style.color = chatPreviewTextColorInput.value;
                });
            }
        });
    }
    if (chatNowBtnBgText) {
        chatNowBtnBgText.addEventListener("input", () => {
            if (chatNowBtnBgInput) chatNowBtnBgInput.value = chatNowBtnBgText.value;
            if (chatNowBtnBg) chatNowBtnBg.style.backgroundColor = chatNowBtnBgText.value;
        });
    }
    if (chatNowBtnBgInput) {
        chatNowBtnBgInput.addEventListener("input", () => {
            if (chatNowBtnBgText) chatNowBtnBgText.value = chatNowBtnBgInput.value;
            if (chatNowBtnBg) chatNowBtnBg.style.backgroundColor = chatNowBtnBgInput.value;
        });
    }
    if (chatNowBtnTextColorText) {
        chatNowBtnTextColorText.addEventListener("input", () => {
            if (chatNowBtnTextColorInput) chatNowBtnTextColorInput.value = chatNowBtnTextColorText.value;
            if (chatNowBtnBg) chatNowBtnBg.style.color = chatNowBtnTextColorText.value;
            if (chatNowBtnText) chatNowBtnText.style.fill = chatNowBtnTextColorText.value;
        });
    }
    if (chatNowBtnTextColorInput) {
        chatNowBtnTextColorInput.addEventListener("input", () => {
            if (chatNowBtnTextColorText) chatNowBtnTextColorText.value = chatNowBtnTextColorInput.value;
            if (chatNowBtnBg) chatNowBtnBg.style.color = chatNowBtnTextColorInput.value;
            if (chatNowBtnText) chatNowBtnText.style.fill = chatNowBtnTextColorInput.value;
        });
    }
    if (linkItemBgText) {
        linkItemBgText.addEventListener("input", () => {
            if (linkItemBgInput) linkItemBgInput.value = linkItemBgText.value;
            if (linkItemsBg) {
                linkItemsBg.forEach(item => {
                    item.style.backgroundColor = linkItemBgText.value;
                });
            }
        });
    }
    if (linkItemBgInput) {
        linkItemBgInput.addEventListener("input", () => {
            if (linkItemBgText) linkItemBgText.value = linkItemBgInput.value;
            if (linkItemsBg) {
                linkItemsBg.forEach(item => {
                    item.style.backgroundColor = linkItemBgInput.value;
                });
            }
        });
    }
    if (linkItemTextColorText) {
        linkItemTextColorText.addEventListener("input", () => {
            if (linkItemTextColorInput) linkItemTextColorInput.value = linkItemTextColorText.value;
            if (linkItemsText) {
                linkItemsText.forEach(text => {
                    text.style.color = linkItemTextColorText.value;
                });
            }
        });
    }
    if (linkItemTextColorInput) {
        linkItemTextColorInput.addEventListener("input", () => {
            if (linkItemTextColorText) linkItemTextColorText.value = linkItemTextColorInput.value;
            if (linkItemsText) {
                linkItemsText.forEach(text => {
                    text.style.color = linkItemTextColorInput.value;
                });
            }
        });
    }

    // Radio button event listener
    const radioButtons = document.querySelectorAll('input[name="chat_option"]');
    radioButtons.forEach(radio => {
        radio.addEventListener("change", () => {
            toggleInputs(radio.value);
        });
    });

    // Save button event listener
    const saveBtn = document.getElementById("saveBtn");
    if (saveBtn) {
        saveBtn.addEventListener("click", saveSettings);
    }

    // Load settings on page load
    loadSettings();

    // Emoji Picker Functionality
    const emojiButton = document.querySelector(".emoji-button");
    const emojiPicker = document.getElementById("emojiPicker");
    if (emojiButton) {
        emojiButton.addEventListener("click", () => {
            if (emojiPicker) emojiPicker.classList.toggle("hidden");
        });
    }
    if (emojiPicker) {
        emojiPicker.querySelectorAll("span").forEach(span => {
            span.addEventListener("click", () => {
                if (widgetMessageInput) widgetMessageInput.value += span.dataset.emoji;
                if (emojiPicker) emojiPicker.classList.add("hidden");
            });
        });
    }
});