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

// Chat Bar Inputs
const chatBarTextInput = document.getElementById("chatBarTextInput");
const chatBarBgColorInput = document.getElementById("chatBarBgColorInput");
const chatBarBgColorText = document.getElementById("chatBarBgColorText");
const chatBarTextColorInput = document.getElementById("chatBarTextColorInput");
const chatBarTextColorText = document.getElementById("chatBarTextColorText");

// Chat Widget Inputs
const widgetAgentName = document.getElementById("widgetAgentName");
const widgetBubbleBgColorInput = document.getElementById("widgetBubbleBgColorInput");
const widgetBubbleBgColorText = document.getElementById("widgetBubbleBgColorText");
const widgetBubbleBorderColorInput = document.getElementById("widgetBubbleBorderColorInput");
const widgetBubbleBorderColorText = document.getElementById("widgetBubbleBorderColorText");
const widgetBubbleTitleColorInput = document.getElementById("widgetBubbleTitleColorInput");
const widgetBubbleTitleColorText = document.getElementById("widgetBubbleTitleColorText");
const widgetBubbleTextColorInput = document.getElementById("widgetBubbleTextColorInput");
const widgetBubbleTextColorText = document.getElementById("widgetBubbleTextColorText");
const widgetMessagesBgColorInput = document.getElementById("widgetMessagesBgColorInput");
const widgetMessagesBgColorText = document.getElementById("widgetMessagesBgColorText");
const widgetUserMsgBgColorInput = document.getElementById("widgetUserMsgBgColorInput");
const widgetUserMsgBgColorText = document.getElementById("widgetUserMsgBgColorText");
const widgetMsgTextColorInput = document.getElementById("widgetMsgTextColorInput");
const widgetMsgTextColorText = document.getElementById("widgetMsgTextColorText");
const widgetInputBgColorInput = document.getElementById("widgetInputBgColorInput");
const widgetInputBgColorText = document.getElementById("widgetInputBgColorText");
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
        bubbleBgColorInput.value = bubbleBgColorText.value;
        bubbleIconColorInput.value = bubbleIconColorText.value;
        bubblePreviewBox.style.backgroundColor = bubbleBgColorText.value;
        bubbleIcon.style.fill = bubbleIconColorText.value;

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
        widgetAgentName.value = settings.chatWidget.agentName || "";
        widgetBubbleBgColorText.value = settings.chatWidget.bubbleBgColor || "#ffffff";
        widgetBubbleBorderColorText.value = settings.chatWidget.bubbleBorderColor || "#ff5101";
        widgetBubbleTitleColorText.value = settings.chatWidget.bubbleTitleColor || "#000000";
        widgetBubbleTextColorText.value = settings.chatWidget.bubbleTextColor || "#374151";
        widgetMessagesBgColorText.value = settings.chatWidget.messagesBgColor || "#f3f4f6";
        widgetUserMsgBgColorText.value = settings.chatWidget.userMsgBgColor || "#fef08a";
        widgetMsgTextColorText.value = settings.chatWidget.msgTextColor || "#000000";
        widgetInputBgColorText.value = settings.chatWidget.inputBgColor || "#ffffff";
        widgetSendBtnBgColorText.value = settings.chatWidget.sendBtnBgColor || "#000000";
        widgetSendBtnIconColorText.value = settings.chatWidget.sendBtnIconColor || "#ffffff";
        widgetBubbleBgColorInput.value = widgetBubbleBgColorText.value;
        widgetBubbleBorderColorInput.value = widgetBubbleBorderColorText.value;
        widgetBubbleTitleColorInput.value = widgetBubbleTitleColorText.value;
        widgetBubbleTextColorInput.value = widgetBubbleTextColorText.value;
        widgetMessagesBgColorInput.value = widgetMessagesBgColorText.value;
        widgetUserMsgBgColorInput.value = widgetUserMsgBgColorText.value;
        widgetMsgTextColorInput.value = widgetMsgTextColorText.value;
        widgetInputBgColorInput.value = widgetInputBgColorText.value;
        widgetSendBtnBgColorInput.value = widgetSendBtnBgColorText.value;
        widgetSendBtnIconColorInput.value = widgetSendBtnIconColorText.value;
        widgetAgentNamePreview.textContent = widgetAgentName.value || "LiveChat";
        widgetBubblePreview.style.backgroundColor = widgetBubbleBgColorText.value;
        widgetBubblePreview.style.borderColor = widgetBubbleBorderColorText.value;
        widgetAgentNamePreview.style.color = widgetBubbleTitleColorText.value;
        widgetBubbleTextPreview.style.color = widgetBubbleTextColorText.value;
        widgetMessagesPreview.style.backgroundColor = widgetMessagesBgColorText.value;
        widgetMessagesPreview.querySelectorAll(".chat-message:not(.user)").forEach(msg => {
            msg.style.backgroundColor = widgetMessagesBgColorText.value;
        });
        widgetMessagesPreview.querySelectorAll(".chat-message.user").forEach(msg => {
            msg.style.backgroundColor = widgetUserMsgBgColorText.value;
        });
        widgetMessagesPreview.querySelectorAll(".chat-message").forEach(msg => {
            msg.style.color = widgetMsgTextColorText.value;
        });
        widgetMessageInput.parentElement.style.backgroundColor = widgetInputBgColorText.value;
        widgetSendButton.classList.add('active');
        widgetSendButton.style.backgroundColor = widgetSendBtnBgColorText.value;
        widgetSendButton.style.color = widgetSendBtnIconColorText.value;

        // Apply Chat Widget Landing settings
        modalBgColorText.value = settings.chatWidget.modalBgColor || "#d3d3d3";
        modalTitleColorText.value = settings.chatWidget.modalTitleColor || "#000000";
        chatPreviewBgText.value = settings.chatWidget.chatPreviewBg || "#f3f4f6";
        chatPreviewTextColorText.value = settings.chatWidget.chatPreviewTextColor || "#374151";
        chatNowBtnBgText.value = settings.chatWidget.chatNowBtnBg || "#000000";
        chatNowBtnTextColorText.value = settings.chatWidget.chatNowBtnTextColor || "#ffffff";
        linkItemBgText.value = settings.chatWidget.linkItemBg || "#f3f4f6";
        linkItemTextColorText.value = settings.chatWidget.linkItemTextColor || "#374151";
        modalBgColorInput.value = modalBgColorText.value;
        modalTitleColorInput.value = modalTitleColorText.value;
        chatPreviewBgInput.value = chatPreviewBgText.value;
        chatPreviewTextColorInput.value = chatPreviewTextColorText.value;
        chatNowBtnBgInput.value = chatNowBtnBgText.value;
        chatNowBtnTextColorInput.value = chatNowBtnTextColorText.value;
        linkItemBgInput.value = linkItemBgText.value;
        linkItemTextColorInput.value = linkItemTextColorText.value;
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
        linkItemsText.forEach(item => {
            item.style.color = linkItemTextColorText.value;
        });

        // Set selected radio button
        const radioButton = document.querySelector(`input[name="chat_option"][value="${settings.selectedOption}"]`);
        if (radioButton) {
            radioButton.checked = true;
            radioButton.dispatchEvent(new Event("change"));
        }
    }
}

// Call loadSettings on page load
loadSettings();

// Update Eyecatcher Title
titleInput.addEventListener("input", () => {
    eyecatcherPreviewTitle.textContent = titleInput.value || "Hello";
});

// Update Eyecatcher Invitation Text
textInput.addEventListener("input", () => {
    eyecatcherPreviewText.textContent = textInput.value || "Click to chat";
});

// Update Eyecatcher Background Color
bgColorInput.addEventListener("input", () => {
    eyecatcherPreviewBox.style.backgroundColor = bgColorInput.value;
    bgColorPicker.value = bgColorInput.value;
});

bgColorPicker.addEventListener("input", () => {
    eyecatcherPreviewBox.style.backgroundColor = bgColorPicker.value;
    bgColorInput.value = bgColorPicker.value;
});

// Update Eyecatcher Text Color
textColorInput.addEventListener("input", () => {
    eyecatcherPreviewBox.style.color = textColorInput.value;
    textColorPicker.value = textColorInput.value;
});

textColorPicker.addEventListener("input", () => {
    eyecatcherPreviewBox.style.color = textColorPicker.value;
    textColorInput.value = textColorPicker.value;
});

// Update Bubble Background Color
bubbleBgColorInput.addEventListener("input", () => {
    bubblePreviewBox.style.backgroundColor = bubbleBgColorInput.value;
    bubbleBgColorText.value = bubbleBgColorInput.value;
});

bubbleBgColorText.addEventListener("input", () => {
    bubblePreviewBox.style.backgroundColor = bubbleBgColorText.value;
    bubbleBgColorInput.value = bubbleBgColorText.value;
});

// Update Bubble Icon Color
bubbleIconColorInput.addEventListener("input", () => {
    bubbleIcon.style.fill = bubbleIconColorInput.value;
    bubbleIconColorText.value = bubbleIconColorInput.value;
});

bubbleIconColorText.addEventListener("input", () => {
    bubbleIcon.style.fill = bubbleIconColorText.value;
    bubbleIconColorInput.value = bubbleIconColorText.value;
});

// Update Chat Bar Text
chatBarTextInput.addEventListener("input", () => {
    chatBarPreviewText.textContent = chatBarTextInput.value || "Chat with us";
});

// Update Chat Bar Background Color
chatBarBgColorInput.addEventListener("input", () => {
    chatBarPreviewBox.style.backgroundColor = chatBarBgColorInput.value;
    chatBarBgColorText.value = chatBarBgColorInput.value;
});

chatBarBgColorText.addEventListener("input", () => {
    chatBarPreviewBox.style.backgroundColor = chatBarBgColorText.value;
    chatBarBgColorInput.value = chatBarBgColorText.value;
});

// Update Chat Bar Text Color
chatBarTextColorInput.addEventListener("input", () => {
    chatBarPreviewBox.style.color = chatBarTextColorInput.value;
    chatBarTextColorText.value = chatBarTextColorInput.value;
});

chatBarTextColorText.addEventListener("input", () => {
    chatBarPreviewBox.style.color = chatBarTextColorText.value;
    chatBarTextColorInput.value = chatBarTextColorText.value;
});

// Chat Widget Open Event Listeners
widgetAgentName.addEventListener("input", () => {
    widgetAgentNamePreview.textContent = widgetAgentName.value || "LiveChat";
});

widgetBubbleBgColorInput.addEventListener("input", () => {
    widgetBubblePreview.style.backgroundColor = widgetBubbleBgColorInput.value;
    widgetBubbleBgColorText.value = widgetBubbleBgColorInput.value;
});

widgetBubbleBgColorText.addEventListener("input", () => {
    widgetBubblePreview.style.backgroundColor = widgetBubbleBgColorText.value;
    widgetBubbleBgColorInput.value = widgetBubbleBgColorText.value;
});

widgetBubbleBorderColorInput.addEventListener("input", () => {
    widgetBubblePreview.style.borderColor = widgetBubbleBorderColorInput.value;
    widgetBubbleBorderColorText.value = widgetBubbleBorderColorInput.value;
});

widgetBubbleBorderColorText.addEventListener("input", () => {
    widgetBubblePreview.style.borderColor = widgetBubbleBorderColorText.value;
    widgetBubbleBorderColorInput.value = widgetBubbleBorderColorText.value;
});

widgetBubbleTitleColorInput.addEventListener("input", () => {
    widgetAgentNamePreview.style.color = widgetBubbleTitleColorInput.value;
    widgetBubbleTitleColorText.value = widgetBubbleTitleColorInput.value;
});

widgetBubbleTitleColorText.addEventListener("input", () => {
    widgetAgentNamePreview.style.color = widgetBubbleTitleColorText.value;
    widgetBubbleTitleColorInput.value = widgetBubbleTitleColorText.value;
});

widgetBubbleTextColorInput.addEventListener("input", () => {
    widgetBubbleTextPreview.style.color = widgetBubbleTextColorInput.value;
    widgetBubbleTextColorText.value = widgetBubbleTextColorInput.value;
});

widgetBubbleTextColorText.addEventListener("input", () => {
    widgetBubbleTextPreview.style.color = widgetBubbleTextColorText.value;
    widgetBubbleTextColorInput.value = widgetBubbleTextColorText.value;
});

widgetMessagesBgColorInput.addEventListener("input", () => {
    widgetMessagesPreview.style.backgroundColor = widgetMessagesBgColorInput.value;
    widgetMessagesPreview.querySelectorAll(".chat-message:not(.user)").forEach(msg => {
        msg.style.backgroundColor = widgetMessagesBgColorInput.value;
    });
    widgetMessagesBgColorText.value = widgetMessagesBgColorInput.value;
});

widgetMessagesBgColorText.addEventListener("input", () => {
    widgetMessagesPreview.style.backgroundColor = widgetMessagesBgColorText.value;
    widgetMessagesPreview.querySelectorAll(".chat-message:not(.user)").forEach(msg => {
        msg.style.backgroundColor = widgetMessagesBgColorText.value;
    });
    widgetMessagesBgColorInput.value = widgetMessagesBgColorText.value;
});

widgetUserMsgBgColorInput.addEventListener("input", () => {
    widgetMessagesPreview.querySelectorAll(".chat-message.user").forEach(msg => {
        msg.style.backgroundColor = widgetUserMsgBgColorInput.value;
    });
    widgetUserMsgBgColorText.value = widgetUserMsgBgColorInput.value;
});

widgetUserMsgBgColorText.addEventListener("input", () => {
    widgetMessagesPreview.querySelectorAll(".chat-message.user").forEach(msg => {
        msg.style.backgroundColor = widgetUserMsgBgColorText.value;
    });
    widgetUserMsgBgColorInput.value = widgetUserMsgBgColorText.value;
});

widgetMsgTextColorInput.addEventListener("input", () => {
    widgetMessagesPreview.querySelectorAll(".chat-message").forEach(msg => {
        msg.style.color = widgetMsgTextColorInput.value;
    });
    widgetMsgTextColorText.value = widgetMsgTextColorInput.value;
});

widgetMsgTextColorText.addEventListener("input", () => {
    widgetMessagesPreview.querySelectorAll(".chat-message").forEach(msg => {
        msg.style.color = widgetMsgTextColorText.value;
    });
    widgetMsgTextColorInput.value = widgetMsgTextColorText.value;
});

widgetInputBgColorInput.addEventListener("input", () => {
    widgetMessageInput.parentElement.style.backgroundColor = widgetInputBgColorInput.value;
    widgetInputBgColorText.value = widgetInputBgColorInput.value;
});

widgetInputBgColorText.addEventListener("input", () => {
    widgetMessageInput.parentElement.style.backgroundColor = widgetInputBgColorText.value;
    widgetInputBgColorInput.value = widgetInputBgColorText.value;
});

widgetSendBtnBgColorInput.addEventListener("input", () => {
    widgetSendButton.classList.add('active');
    widgetSendButton.style.backgroundColor = widgetSendBtnBgColorInput.value;
    widgetSendBtnBgColorText.value = widgetSendBtnBgColorInput.value;
});

widgetSendBtnBgColorText.addEventListener("input", () => {
    widgetSendButton.classList.add('active');
    widgetSendButton.style.backgroundColor = widgetSendBtnBgColorText.value;
    widgetSendBtnBgColorInput.value = widgetSendBtnBgColorText.value;
});

widgetSendBtnIconColorInput.addEventListener("input", () => {
    widgetSendButton.style.color = widgetSendBtnIconColorInput.value;
    widgetSendBtnIconColorText.value = widgetSendBtnIconColorInput.value;
});

widgetSendBtnIconColorText.addEventListener("input", () => {
    widgetSendButton.style.color = widgetSendBtnIconColorText.value;
    widgetSendBtnIconColorInput.value = widgetSendBtnIconColorText.value;
});

// Chat Widget Landing Event Listeners
modalBgColorInput.addEventListener("input", () => {
    modalLandingBg.style.background = `linear-gradient(to bottom, ${modalBgColorInput.value}, #e8e8e8)`;
    modalBgColorText.value = modalBgColorInput.value;
});

modalBgColorText.addEventListener("input", () => {
    modalLandingBg.style.background = `linear-gradient(to bottom, ${modalBgColorText.value}, #e8e8e8)`;
    modalBgColorInput.value = modalBgColorText.value;
});

modalTitleColorInput.addEventListener("input", () => {
    modalTitle.style.color = modalTitleColorInput.value;
    modalTitleColorText.value = modalTitleColorInput.value;
});

modalTitleColorText.addEventListener("input", () => {
    modalTitle.style.color = modalTitleColorText.value;
    modalTitleColorInput.value = modalTitleColorText.value;
});

chatPreviewBgInput.addEventListener("input", () => {
    chatPreviewBg.style.backgroundColor = chatPreviewBgInput.value;
    chatPreviewBgText.value = chatPreviewBgInput.value;
});

chatPreviewBgText.addEventListener("input", () => {
    chatPreviewBg.style.backgroundColor = chatPreviewBgText.value;
    chatPreviewBgInput.value = chatPreviewBgText.value;
});

chatPreviewTextColorInput.addEventListener("input", () => {
    chatPreviewTexts.forEach(text => {
        text.style.color = chatPreviewTextColorInput.value;
    });
    chatPreviewTextColorText.value = chatPreviewTextColorInput.value;
});

chatPreviewTextColorText.addEventListener("input", () => {
    chatPreviewTexts.forEach(text => {
        text.style.color = chatPreviewTextColorText.value;
    });
    chatPreviewTextColorInput.value = chatPreviewTextColorText.value;
});

chatNowBtnBgInput.addEventListener("input", () => {
    chatNowBtnBg.style.backgroundColor = chatNowBtnBgInput.value;
    chatNowBtnBgText.value = chatNowBtnBgInput.value;
});

chatNowBtnBgText.addEventListener("input", () => {
    chatNowBtnBg.style.backgroundColor = chatNowBtnBgText.value;
    chatNowBtnBgInput.value = chatNowBtnBgText.value;
});

chatNowBtnTextColorInput.addEventListener("input", () => {
    chatNowBtnBg.style.color = chatNowBtnTextColorInput.value;
    chatNowBtnText.style.fill = chatNowBtnTextColorInput.value;
    chatNowBtnTextColorText.value = chatNowBtnTextColorInput.value;
});

chatNowBtnTextColorText.addEventListener("input", () => {
    chatNowBtnBg.style.color = chatNowBtnTextColorText.value;
    chatNowBtnText.style.fill = chatNowBtnTextColorText.value;
    chatNowBtnTextColorInput.value = chatNowBtnTextColorText.value;
});

linkItemBgInput.addEventListener("input", () => {
    linkItemsBg.forEach(item => {
        item.style.backgroundColor = linkItemBgInput.value;
    });
    linkItemBgText.value = linkItemBgInput.value;
});

linkItemBgText.addEventListener("input", () => {
    linkItemsBg.forEach(item => {
        item.style.backgroundColor = linkItemBgText.value;
    });
    linkItemBgInput.value = linkItemBgText.value;
});

linkItemTextColorInput.addEventListener("input", () => {
    linkItemsText.forEach(item => {
        item.style.color = linkItemTextColorInput.value;
    });
    linkItemTextColorText.value = linkItemTextColorInput.value;
});

linkItemTextColorText.addEventListener("input", () => {
    linkItemsText.forEach(item => {
        item.style.color = linkItemTextColorText.value;
    });
    linkItemTextColorInput.value = linkItemTextColorText.value;
});

// Radio Button Functionality
const radioButtons = document.querySelectorAll('input[name="chat_option"]');
radioButtons.forEach(radio => {
    radio.addEventListener("change", (event) => {
        const selectedValue = event.target.value;

        // Hide all inputs and previews
        document.getElementById('eyecatcherInputs').style.display = 'none';
        document.getElementById('bubbleInputs').style.display = 'none';
        document.getElementById('chatBarInputs').style.display = 'none';
        document.getElementById('chatWidgetInputs').style.display = 'none';
        document.getElementById('chatWidgetOpenInputs').style.display = 'none';
        document.getElementById('chatWidgetLandingInputs').style.display = 'none';
        eyecatcherPreviewBox.style.display = 'none';
        bubblePreviewBox.style.display = 'none';
        chatBarPreviewBox.style.display = 'none';
        chatWidgetPreviewBox.style.display = 'none';
        document.getElementById('chatWidgetOpenContent').style.display = 'none';
        document.getElementById('homeContent').style.display = 'none';

        // Show selected option
        if (selectedValue === "eyecatcher") {
            document.getElementById('eyecatcherInputs').style.display = 'block';
            eyecatcherPreviewBox.style.display = 'flex';
        } else if (selectedValue === "bubble") {
            document.getElementById('bubbleInputs').style.display = 'block';
            bubblePreviewBox.style.display = 'flex';
            bubblePreviewBox.style.backgroundColor = bubbleBgColorInput.value;
        } else if (selectedValue === "chat_bar") {
            document.getElementById('chatBarInputs').style.display = 'block';
            chatBarPreviewBox.style.display = 'flex';
        } else if (selectedValue === "chat_widget") {
            document.getElementById('chatWidgetInputs').style.display = 'block';
            document.getElementById('chatWidgetOpenInputs').style.display = 'block';
            chatWidgetPreviewBox.style.display = 'block';
            document.getElementById('chatWidgetOpenContent').style.display = 'block';
        } else if (selectedValue === "chat_widget_landing") {
            document.getElementById('chatWidgetInputs').style.display = 'block';
            document.getElementById('chatWidgetLandingInputs').style.display = 'block';
            chatWidgetPreviewBox.style.display = 'block';
            document.getElementById('homeContent').style.display = 'block';
        }
    });
});

// Save functionality
document.getElementById("saveBtn").addEventListener("click", () => {
    const selectedOption = document.querySelector('input[name="chat_option"]:checked').value;
    const settings = {
        selectedOption: selectedOption,
        eyecatcher: {
            title: titleInput.value,
            text: textInput.value,
            bgColor: bgColorInput.value,
            textColor: textColorInput.value
        },
        bubble: {
            bgColor: bubbleBgColorText.value,
            iconColor: bubbleIconColorText.value
        },
        chatBar: {
            text: chatBarTextInput.value,
            bgColor: chatBarBgColorText.value,
            textColor: chatBarTextColorText.value
        },
        chatWidget: {
            agentName: widgetAgentName.value,
            bubbleBgColor: widgetBubbleBgColorText.value,
            bubbleBorderColor: widgetBubbleBorderColorText.value,
            bubbleTitleColor: widgetBubbleTitleColorText.value,
            bubbleTextColor: widgetBubbleTextColorText.value,
            messagesBgColor: widgetMessagesBgColorText.value,
            userMsgBgColor: widgetUserMsgBgColorText.value,
            msgTextColor: widgetMsgTextColorText.value,
            inputBgColor: widgetInputBgColorText.value,
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
    alert("Settings saved to local storage!");
});

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

// Attachment Button Functionality
const attachmentButton = document.querySelector(".attachment-button");
const attachmentInput = document.getElementById("attachmentInput");
attachmentButton.addEventListener("click", () => {
    attachmentInput.click();
});

attachmentInput.addEventListener("change", () => {
    if (attachmentInput.files.length > 0) {
        alert(`Selected file: ${attachmentInput.files[0].name}`);
    }
});