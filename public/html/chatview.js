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
    const widgetBubbleBgColorInput = document.getElementById("widgetBubbleBgColorInput");
    const widgetBubbleBgColorText = document.getElementById("widgetBubbleBgColorText");
    const widgetBubbleBorderColorInput = document.getElementById("widgetBubbleBorderColorInput");
    const widgetBubbleBorderColorText = document.getElementById("widgetBubbleBorderColorText");
    const widgetBubbleTitleColorInput = document.getElementById("widgetBubbleTitleColorInput");
    const widgetBubbleTitleColorText = document.getElementById("widgetBubbleTitleColorText");
    const widgetBubbleTextColorInput = document.getElementById("widgetBubbleTextColorInput");
    const widgetBubbleTextColorText = document.getElementById("widgetBubbleTextColorText");
    const widgetBotMsgBgColorInput = document.getElementById("widgetBotMsgBgColorInput");
    const widgetBotMsgBgColorText = document.getElementById("widgetBotMsgBgColorText");
    const widgetUserMsgBgColorInput = document.getElementById("widgetUserMsgBgColorInput");
    const widgetUserMsgBgColorText = document.getElementById("widgetUserMsgBgColorText");
    const widgetMsgTextColorInput = document.getElementById("widgetMsgTextColorInput");
    const widgetMsgTextColorText = document.getElementById("widgetMsgTextColorText");
    const widgetSendBtnBgColorInput = document.getElementById("widgetSendBtnBgColorInput");
    const widgetSendBtnBgColorText = document.getElementById("widgetSendBtnBgColorText");
    const widgetSendBtnIconColorInput = document.getElementById("widgetSendBtnIconColorInput");
    const widgetSendBtnIconColorText = document.getElementById("widgetSendBtnIconColorText");

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
    const widgetBubblePreview = document.getElementById("widgetBubblePreview");
    const widgetAgentNamePreview = document.getElementById("widgetAgentNamePreview");
    const widgetBubbleTextPreview = document.getElementById("widgetBubbleTextPreview");
    const widgetMessagesPreview = document.getElementById("widgetMessagesPreview");
    const widgetMessageInput = document.getElementById("widgetMessageInput");
    const widgetSendButton = document.querySelector(".send-button");
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

    moreOptionsButton.addEventListener("click", () => {
        dropdownMenu.classList.toggle("active");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (event) => {
        if (!moreOptionsButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("active");
        }
    });

    // Load settings from localStorage
    function loadSettings() {
        const savedSettings = localStorage.getItem("chatSettings");
        if (savedSettings) {
            const settings = JSON.parse(savedSettings);

            // Apply Eyecatcher settings
            titleInput.value = settings.eyecatcher.title || "";
            textInput.value = settings.eyecatcher.text || "";
            bgColorInput.value = settings.eyecatcher.bgColor || "#007bff";
            textColorInput.value = settings.eyecatcher.textColor || "#ffffff";
            bgColorPicker.value = bgColorInput.value;
            textColorPicker.value = textColorInput.value;
            eyecatcherPreviewTitle.textContent = titleInput.value || "Hello";
            eyecatcherPreviewText.textContent = textInput.value || "Click to chat";
            eyecatcherPreviewBox.style.backgroundColor = bgColorInput.value;
            eyecatcherPreviewBox.style.color = textColorInput.value;

            // Apply Bubble settings
            bubbleBgColorText.value = settings.bubble.bgColor || "#ff5101";
            bubbleIconColorText.value = settings.bubble.iconColor || "#ffffff";
            bubbleDotsColorText.value = settings.bubble.dotsColor || "#ff5101";
            bubbleBgColorInput.value = bubbleBgColorText.value;
            bubbleIconColorInput.value = bubbleIconColorText.value;
            bubbleDotsColorInput.value = bubbleDotsColorText.value;
            bubblePreviewBox.style.backgroundColor = bubbleBgColorText.value;
            bubbleIcon.querySelectorAll("path").forEach(path => {
                path.setAttribute("fill", bubbleIconColorText.value);
            });
            bubbleDots.forEach(dot => {
                dot.style.backgroundColor = bubbleDotsColorText.value;
            });

            // Apply Chat Bar settings
            chatBarTextInput.value = settings.chatBar.text || "";
            chatBarBgColorText.value = settings.chatBar.bgColor || "#007bff";
            chatBarTextColorText.value = settings.chatBar.textColor || "#ffffff";
            chatBarBgColorInput.value = chatBarBgColorText.value;
            chatBarTextColorInput.value = chatBarTextColorText.value;
            chatBarPreviewText.textContent = chatBarTextInput.value || "Chat with us";
            chatBarPreviewBox.style.backgroundColor = chatBarBgColorText.value;
            chatBarPreviewBox.style.color = chatBarTextColorText.value;

            // Apply Chat Widget settings
            widgetBubbleBgColorText.value = settings.chatWidget.bubbleBgColor || "#ffffff";
            widgetBubbleBorderColorText.value = settings.chatWidget.bubbleBorderColor || "#ff5101";
            widgetBubbleTitleColorText.value = settings.chatWidget.bubbleTitleColor || "#000000";
            widgetBubbleTextColorText.value = settings.chatWidget.bubbleTextColor || "#374151";
            widgetBotMsgBgColorText.value = settings.chatWidget.botMsgBgColor || "#f3f4f6";
            widgetUserMsgBgColorText.value = settings.chatWidget.userMsgBgColor || "#fef08a";
            widgetMsgTextColorText.value = settings.chatWidget.msgTextColor || "#000000";
            widgetSendBtnBgColorText.value = settings.chatWidget.sendBtnBgColor || "#000000";
            widgetSendBtnIconColorText.value = settings.chatWidget.sendBtnIconColor || "#ffffff";
            modalBgColorText.value = settings.chatWidget.modalBgColor || "#d3d3d3";
            modalTitleColorText.value = settings.chatWidget.modalTitleColor || "#000000";
            chatPreviewBgText.value = settings.chatWidget.chatPreviewBg || "#f3f4f6";
            chatPreviewTextColorText.value = settings.chatWidget.chatPreviewTextColor || "#374151";
            chatNowBtnBgText.value = settings.chatWidget.chatNowBtnBg || "#000000";
            chatNowBtnTextColorText.value = settings.chatWidget.chatNowBtnTextColor || "#ffffff";
            linkItemBgText.value = settings.chatWidget.linkItemBg || "#f3f4f6";
            linkItemTextColorText.value = settings.chatWidget.linkItemTextColor || "#374151";
            widgetBubbleBgColorInput.value = widgetBubbleBgColorText.value;
            widgetBubbleBorderColorInput.value = widgetBubbleBorderColorText.value;
            widgetBubbleTitleColorInput.value = widgetBubbleTitleColorText.value;
            widgetBubbleTextColorInput.value = widgetBubbleTextColorText.value;
            widgetBotMsgBgColorInput.value = widgetBotMsgBgColorText.value;
            widgetUserMsgBgColorInput.value = widgetUserMsgBgColorText.value;
            widgetMsgTextColorInput.value = widgetMsgTextColorText.value;
            widgetSendBtnBgColorInput.value = widgetSendBtnBgColorText.value;
            widgetSendBtnIconColorInput.value = widgetSendBtnIconColorText.value;
            modalBgColorInput.value = modalBgColorText.value;
            modalTitleColorInput.value = modalTitleColorText.value;
            chatPreviewBgInput.value = chatPreviewBgText.value;
            chatPreviewTextColorInput.value = chatPreviewTextColorText.value;
            chatNowBtnBgInput.value = chatNowBtnBgText.value;
            chatNowBtnTextColorInput.value = chatNowBtnTextColorText.value;
            linkItemBgInput.value = linkItemBgText.value;
            linkItemTextColorInput.value = linkItemTextColorText.value;
            widgetBubblePreview.style.backgroundColor = widgetBubbleBgColorText.value;
            widgetBubblePreview.style.borderColor = widgetBubbleBorderColorText.value;
            widgetAgentNamePreview.style.color = widgetBubbleTitleColorText.value;
            widgetBubbleTextPreview.style.color = widgetBubbleTextColorText.value;
            widgetMessagesPreview.querySelectorAll(".chat-message:not(.user) div").forEach(msg => {
                msg.style.backgroundColor = widgetBotMsgBgColorText.value;
            });
            widgetMessagesPreview.querySelectorAll(".chat-message.user").forEach(msg => {
                msg.style.backgroundColor = widgetUserMsgBgColorText.value;
            });
            widgetMessagesPreview.querySelectorAll(".chat-message").forEach(msg => {
                msg.style.color = widgetMsgTextColorText.value;
            });
            widgetSendButton.classList.add('active');
            widgetSendButton.style.backgroundColor = widgetSendBtnBgColorText.value;
            widgetSendButton.style.color = widgetSendBtnIconColorText.value;
            modalLandingBg.style.background = `linear-gradient(to bottom, ${modalBgColorText.value}, #e8e8e8)`;
            modalTitle.style.color = modalTitleColorText.value;
            chatPreviewBg.style.backgroundColor = chatPreviewBgText.value;
            chatPreviewTexts.forEach(text => {
                text.style.color = chatPreviewTextColorText.value;
            });
            chatNowBtnBg.style.backgroundColor = chatNowBtnBgText.value;
            chatNowBtnBg.style.color = chatNowBtnTextColorText.value;
            chatNowBtnText.style.fill = chatNowBtnTextColorText.value;
            linkItemsBg.forEach(item => {
                item.style.backgroundColor = linkItemBgText.value;
            });
            linkItemsText.forEach(text => {
                text.style.color = linkItemTextColorText.value;
            });

            // Set selected radio button
            const selectedOption = settings.selectedOption || "eyecatcher";
            document.querySelector(`input[name="chat_option"][value="${selectedOption}"]`).checked = true;
            toggleInputs(selectedOption);
        }
    }

    // Save settings to localStorage
    function saveSettings() {
        const settings = {
            selectedOption: document.querySelector('input[name="chat_option"]:checked').value,
            eyecatcher: {
                title: titleInput.value,
                text: textInput.value,
                bgColor: bgColorInput.value,
                textColor: textColorInput.value
            },
            bubble: {
                bgColor: bubbleBgColorText.value,
                iconColor: bubbleIconColorText.value,
                dotsColor: bubbleDotsColorText.value
            },
            chatBar: {
                text: chatBarTextInput.value,
                bgColor: chatBarBgColorText.value,
                textColor: chatBarTextColorText.value
            },
            chatWidget: {
                bubbleBgColor: widgetBubbleBgColorText.value,
                bubbleBorderColor: widgetBubbleBorderColorText.value,
                bubbleTitleColor: widgetBubbleTitleColorText.value,
                bubbleTextColor: widgetBubbleTextColorText.value,
                botMsgBgColor: widgetBotMsgBgColorText.value,
                userMsgBgColor: widgetUserMsgBgColorText.value,
                msgTextColor: widgetMsgTextColorText.value,
                sendBtnBgColor: widgetSendBtnBgColorText.value,
                sendBtnIconColor: widgetSendBtnIconColorText.value,
                modalBgColor: modalBgColorText.value,
                modalTitleColor: modalTitleColorText.value,
                chatPreviewBg: chatPreviewBgText.value,
                chatPreviewTextColor: chatPreviewTextColorText.value,
                chatNowBtnBg: chatNowBtnBgText.value,
                chatNowBtnTextColor: chatNowBtnTextColorText.value,
                linkItemBg: linkItemBgText.value,
                linkItemTextColor: linkItemTextColorText.value
            }
        };
        localStorage.setItem("chatSettings", JSON.stringify(settings));
        alert("Settings saved!");
    }

    // Toggle input visibility based on selected radio button
    function toggleInputs(selectedOption) {
        document.getElementById("eyecatcherInputs").style.display = selectedOption === "eyecatcher" ? "block" : "none";
        document.getElementById("bubbleInputs").style.display = selectedOption === "bubble" ? "block" : "none";
        document.getElementById("chatBarInputs").style.display = selectedOption === "chat_bar" ? "block" : "none";
        document.getElementById("chatWidgetInputs").style.display = selectedOption.includes("chat_widget") ? "block" : "none";
        document.getElementById("chatWidgetOpenInputs").style.display = selectedOption === "chat_widget" ? "block" : "none";
        document.getElementById("chatWidgetLandingInputs").style.display = selectedOption === "chat_widget_landing" ? "block" : "none";

        eyecatcherPreviewBox.style.display = selectedOption === "eyecatcher" ? "flex" : "none";
        bubblePreviewBox.style.display = selectedOption === "bubble" ? "block" : "none";
        chatBarPreviewBox.style.display = selectedOption === "chat_bar" ? "flex" : "none";
        chatWidgetPreviewBox.style.display = selectedOption.includes("chat_widget") ? "block" : "none";
        document.getElementById("chatWidgetOpenContent").style.display = selectedOption === "chat_widget" ? "flex" : "none";
        document.getElementById("homeContent").style.display = selectedOption === "chat_widget_landing" ? "flex" : "none";
    }

    // Event Listeners for Eyecatcher Inputs
    titleInput.addEventListener("input", () => {
        eyecatcherPreviewTitle.textContent = titleInput.value || "Hello";
    });
    textInput.addEventListener("input", () => {
        eyecatcherPreviewText.textContent = textInput.value || "Click to chat";
    });
    bgColorInput.addEventListener("input", () => {
        bgColorPicker.value = bgColorInput.value;
        eyecatcherPreviewBox.style.backgroundColor = bgColorInput.value;
    });
    textColorInput.addEventListener("input", () => {
        textColorPicker.value = textColorInput.value;
        eyecatcherPreviewBox.style.color = textColorInput.value;
    });
    bgColorPicker.addEventListener("input", () => {
        bgColorInput.value = bgColorPicker.value;
        eyecatcherPreviewBox.style.backgroundColor = bgColorPicker.value;
    });
    textColorPicker.addEventListener("input", () => {
        textColorInput.value = textColorPicker.value;
        eyecatcherPreviewBox.style.color = textColorPicker.value;
    });

    // Event Listeners for Bubble Inputs
    bubbleBgColorText.addEventListener("input", () => {
        bubbleBgColorInput.value = bubbleBgColorText.value;
        bubblePreviewBox.style.backgroundColor = bubbleBgColorText.value;
    });
    bubbleBgColorInput.addEventListener("input", () => {
        bubbleBgColorText.value = bubbleBgColorInput.value;
        bubblePreviewBox.style.backgroundColor = bubbleBgColorInput.value;
    });
    bubbleIconColorText.addEventListener("input", () => {
        bubbleIconColorInput.value = bubbleIconColorText.value;
        bubbleIcon.querySelectorAll("path").forEach(path => {
            path.setAttribute("fill", bubbleIconColorText.value);
        });
    });
    bubbleIconColorInput.addEventListener("input", () => {
        bubbleIconColorText.value = bubbleIconColorInput.value;
        bubbleIcon.querySelectorAll("path").forEach(path => {
            path.setAttribute("fill", bubbleIconColorInput.value);
        });
    });
    bubbleDotsColorText.addEventListener("input", () => {
        bubbleDotsColorInput.value = bubbleDotsColorText.value;
        bubbleDots.forEach(dot => {
            dot.style.backgroundColor = bubbleDotsColorText.value;
        });
    });
    bubbleDotsColorInput.addEventListener("input", () => {
        bubbleDotsColorText.value = bubbleDotsColorInput.value;
        bubbleDots.forEach(dot => {
            dot.style.backgroundColor = bubbleDotsColorInput.value;
        });
    });

    // Event Listeners for Chat Bar Inputs
    chatBarTextInput.addEventListener("input", () => {
        chatBarPreviewText.textContent = chatBarTextInput.value || "Chat with us";
    });
    chatBarBgColorText.addEventListener("input", () => {
        chatBarBgColorInput.value = chatBarBgColorText.value;
        chatBarPreviewBox.style.backgroundColor = chatBarBgColorText.value;
    });
    chatBarBgColorInput.addEventListener("input", () => {
        chatBarBgColorText.value = chatBarBgColorInput.value;
        chatBarPreviewBox.style.backgroundColor = chatBarBgColorInput.value;
    });
    chatBarTextColorText.addEventListener("input", () => {
        chatBarTextColorInput.value = chatBarTextColorText.value;
        chatBarPreviewBox.style.color = chatBarTextColorText.value;
    });
    chatBarTextColorInput.addEventListener("input", () => {
        chatBarTextColorText.value = chatBarTextColorInput.value;
        chatBarPreviewBox.style.color = chatBarTextColorInput.value;
    });

    // Event Listeners for Chat Widget Inputs
    widgetBubbleBgColorText.addEventListener("input", () => {
        widgetBubbleBgColorInput.value = widgetBubbleBgColorText.value;
        widgetBubblePreview.style.backgroundColor = widgetBubbleBgColorText.value;
    });
    widgetBubbleBgColorInput.addEventListener("input", () => {
        widgetBubbleBgColorText.value = widgetBubbleBgColorInput.value;
        widgetBubblePreview.style.backgroundColor = widgetBubbleBgColorInput.value;
    });
    widgetBubbleBorderColorText.addEventListener("input", () => {
        widgetBubbleBorderColorInput.value = widgetBubbleBorderColorText.value;
        widgetBubblePreview.style.borderColor = widgetBubbleBorderColorText.value;
    });
    widgetBubbleBorderColorInput.addEventListener("input", () => {
        widgetBubbleBorderColorText.value = widgetBubbleBorderColorInput.value;
        widgetBubblePreview.style.borderColor = widgetBubbleBorderColorInput.value;
    });
    widgetBubbleTitleColorText.addEventListener("input", () => {
        widgetBubbleTitleColorInput.value = widgetBubbleTitleColorText.value;
        widgetAgentNamePreview.style.color = widgetBubbleTitleColorText.value;
    });
    widgetBubbleTitleColorInput.addEventListener("input", () => {
        widgetBubbleTitleColorText.value = widgetBubbleTitleColorInput.value;
        widgetAgentNamePreview.style.color = widgetBubbleTitleColorInput.value;
    });
    widgetBubbleTextColorText.addEventListener("input", () => {
        widgetBubbleTextColorInput.value = widgetBubbleTextColorText.value;
        widgetBubbleTextPreview.style.color = widgetBubbleTextColorText.value;
    });
    widgetBubbleTextColorInput.addEventListener("input", () => {
        widgetBubbleTextColorText.value = widgetBubbleTextColorInput.value;
        widgetBubbleTextPreview.style.color = widgetBubbleTextColorInput.value;
    });
    widgetBotMsgBgColorText.addEventListener("input", () => {
        widgetBotMsgBgColorInput.value = widgetBotMsgBgColorText.value;
        widgetMessagesPreview.querySelectorAll(".chat-message:not(.user) div").forEach(msg => {
            msg.style.backgroundColor = widgetBotMsgBgColorText.value;
        });
    });
    widgetBotMsgBgColorInput.addEventListener("input", () => {
        widgetBotMsgBgColorText.value = widgetBotMsgBgColorInput.value;
        widgetMessagesPreview.querySelectorAll(".chat-message:not(.user) div").forEach(msg => {
            msg.style.backgroundColor = widgetBotMsgBgColorInput.value;
        });
    });
    widgetUserMsgBgColorText.addEventListener("input", () => {
        widgetUserMsgBgColorInput.value = widgetUserMsgBgColorText.value;
        widgetMessagesPreview.querySelectorAll(".chat-message.user").forEach(msg => {
            msg.style.backgroundColor = widgetUserMsgBgColorText.value;
        });
    });
    widgetUserMsgBgColorInput.addEventListener("input", () => {
        widgetUserMsgBgColorText.value = widgetUserMsgBgColorInput.value;
        widgetMessagesPreview.querySelectorAll(".chat-message.user").forEach(msg => {
            msg.style.backgroundColor = widgetUserMsgBgColorInput.value;
        });
    });
    widgetMsgTextColorText.addEventListener("input", () => {
        widgetMsgTextColorInput.value = widgetMsgTextColorText.value;
        widgetMessagesPreview.querySelectorAll(".chat-message").forEach(msg => {
            msg.style.color = widgetMsgTextColorText.value;
        });
    });
    widgetMsgTextColorInput.addEventListener("input", () => {
        widgetMsgTextColorText.value = widgetMsgTextColorInput.value;
        widgetMessagesPreview.querySelectorAll(".chat-message").forEach(msg => {
            msg.style.color = widgetMsgTextColorInput.value;
        });
    });
    widgetSendBtnBgColorText.addEventListener("input", () => {
        widgetSendBtnBgColorInput.value = widgetSendBtnBgColorText.value;
        widgetSendButton.style.backgroundColor = widgetSendBtnBgColorText.value;
    });
    widgetSendBtnBgColorInput.addEventListener("input", () => {
        widgetSendBtnBgColorText.value = widgetSendBtnBgColorInput.value;
        widgetSendButton.style.backgroundColor = widgetSendBtnBgColorInput.value;
    });
    widgetSendBtnIconColorText.addEventListener("input", () => {
        widgetSendBtnIconColorInput.value = widgetSendBtnIconColorText.value;
        widgetSendButton.style.color = widgetSendBtnIconColorText.value;
    });
    widgetSendBtnIconColorInput.addEventListener("input", () => {
        widgetSendBtnIconColorText.value = widgetSendBtnIconColorInput.value;
        widgetSendButton.style.color = widgetSendBtnIconColorInput.value;
    });

    // Event Listeners for Chat Widget Landing Inputs
    modalBgColorText.addEventListener("input", () => {
        modalBgColorInput.value = modalBgColorText.value;
        modalLandingBg.style.background = `linear-gradient(to bottom, ${modalBgColorText.value}, #e8e8e8)`;
    });
    modalBgColorInput.addEventListener("input", () => {
        modalBgColorText.value = modalBgColorInput.value;
        modalLandingBg.style.background = `linear-gradient(to bottom, ${modalBgColorInput.value}, #e8e8e8)`;
    });
    modalTitleColorText.addEventListener("input", () => {
        modalTitleColorInput.value = modalTitleColorText.value;
        modalTitle.style.color = modalTitleColorText.value;
    });
    modalTitleColorInput.addEventListener("input", () => {
        modalTitleColorText.value = modalTitleColorInput.value;
        modalTitle.style.color = modalTitleColorInput.value;
    });
    chatPreviewBgText.addEventListener("input", () => {
        chatPreviewBgInput.value = chatPreviewBgText.value;
        chatPreviewBg.style.backgroundColor = chatPreviewBgText.value;
    });
    chatPreviewBgInput.addEventListener("input", () => {
        chatPreviewBgText.value = chatPreviewBgInput.value;
        chatPreviewBg.style.backgroundColor = chatPreviewBgInput.value;
    });
    chatPreviewTextColorText.addEventListener("input", () => {
        chatPreviewTextColorInput.value = chatPreviewTextColorText.value;
        chatPreviewTexts.forEach(text => {
            text.style.color = chatPreviewTextColorText.value;
        });
    });
    chatPreviewTextColorInput.addEventListener("input", () => {
        chatPreviewTextColorText.value = chatPreviewTextColorInput.value;
        chatPreviewTexts.forEach(text => {
            text.style.color = chatPreviewTextColorInput.value;
        });
    });
    chatNowBtnBgText.addEventListener("input", () => {
        chatNowBtnBgInput.value = chatNowBtnBgText.value;
        chatNowBtnBg.style.backgroundColor = chatNowBtnBgText.value;
    });
    chatNowBtnBgInput.addEventListener("input", () => {
        chatNowBtnBgText.value = chatNowBtnBgInput.value;
        chatNowBtnBg.style.backgroundColor = chatNowBtnBgInput.value;
    });
    chatNowBtnTextColorText.addEventListener("input", () => {
        chatNowBtnTextColorInput.value = chatNowBtnTextColorText.value;
        chatNowBtnBg.style.color = chatNowBtnTextColorText.value;
        chatNowBtnText.style.fill = chatNowBtnTextColorText.value;
    });
    chatNowBtnTextColorInput.addEventListener("input", () => {
        chatNowBtnTextColorText.value = chatNowBtnTextColorInput.value;
        chatNowBtnBg.style.color = chatNowBtnTextColorInput.value;
        chatNowBtnText.style.fill = chatNowBtnTextColorInput.value;
    });
    linkItemBgText.addEventListener("input", () => {
        linkItemBgInput.value = linkItemBgText.value;
        linkItemsBg.forEach(item => {
            item.style.backgroundColor = linkItemBgText.value;
        });
    });
    linkItemBgInput.addEventListener("input", () => {
        linkItemBgText.value = linkItemBgInput.value;
        linkItemsBg.forEach(item => {
            item.style.backgroundColor = linkItemBgInput.value;
        });
    });
    linkItemTextColorText.addEventListener("input", () => {
        linkItemTextColorInput.value = linkItemTextColorText.value;
        linkItemsText.forEach(text => {
            text.style.color = linkItemTextColorText.value;
        });
    });
    linkItemTextColorInput.addEventListener("input", () => {
        linkItemTextColorText.value = linkItemTextColorInput.value;
        linkItemsText.forEach(text => {
            text.style.color = linkItemTextColorInput.value;
        });
    });

    // Radio button event listener
    document.querySelectorAll('input[name="chat_option"]').forEach(radio => {
        radio.addEventListener("change", () => {
            toggleInputs(radio.value);
        });
    });

    // Save button event listener
    document.getElementById("saveBtn").addEventListener("click", saveSettings);

    // Load settings on page load
    loadSettings();

    // Emoji Picker Functionality
    const emojiButton = document.querySelector(".emoji-button");
    const emojiPicker = document.getElementById("emojiPicker");
    emojiButton.addEventListener("click", () => {
        emojiPicker.classList.toggle("hidden");
    });
    emojiPicker.querySelectorAll("span").forEach(span => {
        span.addEventListener("click", () => {
            widgetMessageInput.value += span.dataset.emoji;
            emojiPicker.classList.add("hidden");
        });
    });
});