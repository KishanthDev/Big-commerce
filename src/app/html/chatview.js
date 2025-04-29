
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
const widgetHeaderBgColorInput = document.getElementById("widgetHeaderBgColorInput");
const widgetHeaderBgColorText = document.getElementById("widgetHeaderBgColorText");
const widgetHeaderTextColorInput = document.getElementById("widgetHeaderTextColorInput");
const widgetHeaderTextColorText = document.getElementById("widgetHeaderTextColorText");
const widgetAgentName = document.getElementById("widgetAgentName");
const widgetIncomingMsgBgInput = document.getElementById("widgetIncomingMsgBgInput");
const widgetIncomingMsgBgText = document.getElementById("widgetIncomingMsgBgText");
const widgetOutgoingMsgBgInput = document.getElementById("widgetOutgoingMsgBgInput");
const widgetOutgoingMsgBgText = document.getElementById("widgetOutgoingMsgBgText");
const widgetMsgTextColorInput = document.getElementById("widgetMsgTextColorInput");
const widgetMsgTextColorText = document.getElementById("widgetMsgTextColorText");
const widgetChatBgColorInput = document.getElementById("widgetChatBgColorInput");
const widgetChatBgColorText = document.getElementById("widgetChatBgColorText");
const widgetInputBgColorInput = document.getElementById("widgetInputBgColorInput");
const widgetInputBgColorText = document.getElementById("widgetInputBgColorText");

// Preview Elements
const eyecatcherPreviewBox = document.getElementById("eyecatcherPreviewBox");
const eyecatcherPreviewTitle = document.getElementById("eyecatcherPreviewTitle");
const eyecatcherPreviewText = document.getElementById("eyecatcherPreviewText");
const bubblePreviewBox = document.getElementById("bubblePreviewBox");
const bubbleIcon = document.getElementById("bubbleIcon");
const chatBarPreviewBox = document.getElementById("chatBarPreviewBox");
const chatBarPreviewText = document.getElementById("chatBarPreviewText");
const chatWidgetPreviewBox = document.getElementById("chatWidgetPreviewBox");
const widgetHeaderPreview = document.getElementById("widgetHeaderPreview");
const widgetAgentNamePreview = document.getElementById("widgetAgentNamePreview");
const widgetMessagesPreview = document.getElementById("widgetMessagesPreview");
const widgetIncomingMsgPreview = document.getElementById("widgetIncomingMsgPreview");
const widgetOutgoingMsgPreview = document.getElementById("widgetOutgoingMsgPreview");
const widgetInputPreview = document.getElementById("widgetInputPreview");

// Update Eyecatcher Title
titleInput.addEventListener("input", () => {
    eyecatcherPreviewTitle.textContent = titleInput.value || "Hello";
    if (titleInput.value) {
        eyecatcherPreviewTitle.innerHTML = `${titleInput.value} <span class="wave">👋</span>`;
    } else {
        eyecatcherPreviewTitle.innerHTML = `Hello <span class="wave">👋</span>`;
    }
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
    bubbleIcon.style.color = bubbleIconColorInput.value;
    bubbleIconColorText.value = bubbleIconColorInput.value;
});

bubbleIconColorText.addEventListener("input", () => {
    bubbleIcon.style.color = bubbleIconColorText.value;
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

// Chat Widget Event Listeners
widgetHeaderBgColorInput.addEventListener("input", () => {
    widgetHeaderPreview.style.backgroundColor = widgetHeaderBgColorInput.value;
    widgetHeaderBgColorText.value = widgetHeaderBgColorInput.value;
});

widgetHeaderBgColorText.addEventListener("input", () => {
    widgetHeaderPreview.style.backgroundColor = widgetHeaderBgColorText.value;
    widgetHeaderBgColorInput.value = widgetHeaderBgColorText.value;
});

widgetHeaderTextColorInput.addEventListener("input", () => {
    widgetHeaderPreview.style.color = widgetHeaderTextColorInput.value;
    widgetHeaderTextColorText.value = widgetHeaderTextColorInput.value;
});

widgetHeaderTextColorText.addEventListener("input", () => {
    widgetHeaderPreview.style.color = widgetHeaderTextColorText.value;
    widgetHeaderTextColorInput.value = widgetHeaderTextColorText.value;
});

widgetAgentName.addEventListener("input", () => {
    widgetAgentNamePreview.textContent = widgetAgentName.value || "Support Agent";
});

widgetIncomingMsgBgInput.addEventListener("input", () => {
    widgetIncomingMsgPreview.style.backgroundColor = widgetIncomingMsgBgInput.value;
    widgetIncomingMsgBgText.value = widgetIncomingMsgBgInput.value;
});

widgetIncomingMsgBgText.addEventListener("input", () => {
    widgetIncomingMsgPreview.style.backgroundColor = widgetIncomingMsgBgText.value;
    widgetIncomingMsgBgInput.value = widgetIncomingMsgBgText.value;
});

widgetOutgoingMsgBgInput.addEventListener("input", () => {
    widgetOutgoingMsgPreview.style.backgroundColor = widgetOutgoingMsgBgInput.value;
    widgetOutgoingMsgBgText.value = widgetOutgoingMsgBgInput.value;
});

widgetOutgoingMsgBgText.addEventListener("input", () => {
    widgetOutgoingMsgPreview.style.backgroundColor = widgetOutgoingMsgBgText.value;
    widgetOutgoingMsgBgInput.value = widgetOutgoingMsgBgText.value;
});

widgetMsgTextColorInput.addEventListener("input", () => {
    const color = widgetMsgTextColorInput.value;
    widgetIncomingMsgPreview.style.color = color;
    widgetOutgoingMsgPreview.style.color = color;
    widgetMsgTextColorText.value = color;
});

widgetMsgTextColorText.addEventListener("input", () => {
    const color = widgetMsgTextColorText.value;
    widgetIncomingMsgPreview.style.color = color;
    widgetOutgoingMsgPreview.style.color = color;
    widgetMsgTextColorInput.value = color;
});

widgetChatBgColorInput.addEventListener("input", () => {
    widgetMessagesPreview.style.backgroundColor = widgetChatBgColorInput.value;
    widgetChatBgColorText.value = widgetChatBgColorInput.value;
});

widgetChatBgColorText.addEventListener("input", () => {
    widgetMessagesPreview.style.backgroundColor = widgetChatBgColorText.value;
    widgetChatBgColorInput.value = widgetChatBgColorText.value;
});

widgetInputBgColorInput.addEventListener("input", () => {
    widgetInputPreview.style.backgroundColor = widgetInputBgColorInput.value;
    widgetInputBgColorText.value = widgetInputBgColorInput.value;
});

widgetInputBgColorText.addEventListener("input", () => {
    widgetInputPreview.style.backgroundColor = widgetInputBgColorText.value;
    widgetInputBgColorInput.value = widgetInputBgColorText.value;
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
        eyecatcherPreviewBox.style.display = 'none';
        bubblePreviewBox.style.display = 'none';
        chatBarPreviewBox.style.display = 'none';
        chatWidgetPreviewBox.style.display = 'none';

        // Show selected option
        if (selectedValue === "eyecatcher") {
            document.getElementById('eyecatcherInputs').style.display = 'block';
            eyecatcherPreviewBox.style.display = 'flex';
        } else if (selectedValue === "bubble") {
            document.getElementById('bubbleInputs').style.display = 'block';
            bubblePreviewBox.style.display = 'flex';
        } else if (selectedValue === "chat_bar") {
            document.getElementById('chatBarInputs').style.display = 'block';
            chatBarPreviewBox.style.display = 'flex';
        } else if (selectedValue === "chat_widget") {
            document.getElementById('chatWidgetInputs').style.display = 'block';
            chatWidgetPreviewBox.style.display = 'block';
        } else if (selectedValue === "chat_widget_cbse") {
            document.getElementById('chatWidgetInputs').style.display = 'block';
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
            headerBgColor: widgetHeaderBgColorText.value,
            headerTextColor: widgetHeaderTextColorText.value,
            agentName: widgetAgentName.value,
            incomingMsgBg: widgetIncomingMsgBgText.value,
            outgoingMsgBg: widgetOutgoingMsgBgText.value,
            msgTextColor: widgetMsgTextColorText.value,
            chatBgColor: widgetChatBgColorText.value,
            inputBgColor: widgetInputBgColorText.value
        }
    };

    localStorage.setItem('chatSettings', JSON.stringify(settings));
    alert('Settings saved successfully!');
});

// Load saved preferences
function loadSettings() {
    const savedSettings = localStorage.getItem('chatSettings');
    if (savedSettings) {
        const settings = JSON.parse(savedSettings);

        // Set radio button
        document.querySelector(`input[name="chat_option"][value="${settings.selectedOption}"]`).checked = true;

        // Set eyecatcher values
        titleInput.value = settings.eyecatcher.title || "Hello";
        textInput.value = settings.eyecatcher.text || "Click to chat";
        bgColorInput.value = settings.eyecatcher.bgColor || "#007bff";
        textColorInput.value = settings.eyecatcher.textColor || "#ffffff";
        bgColorPicker.value = settings.eyecatcher.bgColor || "#007bff";
        textColorPicker.value = settings.eyecatcher.textColor || "#ffffff";

        // Set bubble values
        bubbleBgColorText.value = settings.bubble.bgColor || "#007bff";
        bubbleIconColorText.value = settings.bubble.iconColor || "#ffffff";
        bubbleBgColorInput.value = settings.bubble.bgColor || "#007bff";
        bubbleIconColorInput.value = settings.bubble.iconColor || "#ffffff";

        // Set chat bar values
        chatBarTextInput.value = settings.chatBar.text || "Chat with us";
        chatBarBgColorText.value = settings.chatBar.bgColor || "#007bff";
        chatBarTextColorText.value = settings.chatBar.textColor || "#ffffff";
        chatBarBgColorInput.value = settings.chatBar.bgColor || "#007bff";
        chatBarTextColorInput.value = settings.chatBar.textColor || "#ffffff";

        // Set chat widget values
        if (settings.chatWidget) {
            widgetHeaderBgColorText.value = settings.chatWidget.headerBgColor || "#075e54";
            widgetHeaderBgColorInput.value = settings.chatWidget.headerBgColor || "#075e54";
            widgetHeaderTextColorText.value = settings.chatWidget.headerTextColor || "#ffffff";
            widgetHeaderTextColorInput.value = settings.chatWidget.headerTextColor || "#ffffff";
            widgetAgentName.value = settings.chatWidget.agentName || "Support Agent";
            widgetIncomingMsgBgText.value = settings.chatWidget.incomingMsgBg || "#ffffff";
            widgetIncomingMsgBgInput.value = settings.chatWidget.incomingMsgBg || "#ffffff";
            widgetOutgoingMsgBgText.value = settings.chatWidget.outgoingMsgBg || "#dcf8c6";
            widgetOutgoingMsgBgInput.value = settings.chatWidget.outgoingMsgBg || "#dcf8c6";
            widgetMsgTextColorText.value = settings.chatWidget.msgTextColor || "#000000";
            widgetMsgTextColorInput.value = settings.chatWidget.msgTextColor || "#000000";
            widgetChatBgColorText.value = settings.chatWidget.chatBgColor || "#e5ddd5";
            widgetChatBgColorInput.value = settings.chatWidget.chatBgColor || "#e5ddd5";
            widgetInputBgColorText.value = settings.chatWidget.inputBgColor || "#f0f0f0";
            widgetInputBgColorInput.value = settings.chatWidget.inputBgColor || "#f0f0f0";

            // Update widget preview
            widgetHeaderPreview.style.backgroundColor = settings.chatWidget.headerBgColor || "#075e54";
            widgetHeaderPreview.style.color = settings.chatWidget.headerTextColor || "#ffffff";
            widgetAgentNamePreview.textContent = settings.chatWidget.agentName || "Support Agent";
            widgetIncomingMsgPreview.style.backgroundColor = settings.chatWidget.incomingMsgBg || "#ffffff";
            widgetOutgoingMsgPreview.style.backgroundColor = settings.chatWidget.outgoingMsgBg || "#dcf8c6";
            widgetIncomingMsgPreview.style.color = settings.chatWidget.msgTextColor || "#000000";
            widgetOutgoingMsgPreview.style.color = settings.chatWidget.msgTextColor || "#000000";
            widgetMessagesPreview.style.backgroundColor = settings.chatWidget.chatBgColor || "#e5ddd5";
            widgetInputPreview.style.backgroundColor = settings.chatWidget.inputBgColor || "#f0f0f0";
        }

        // Update previews
        eyecatcherPreviewTitle.innerHTML = (settings.eyecatcher.title || "Hello") + ` <span class="wave">👋</span>`;
        eyecatcherPreviewText.textContent = settings.eyecatcher.text || "Click to chat";
        eyecatcherPreviewBox.style.backgroundColor = settings.eyecatcher.bgColor || "#007bff";
        eyecatcherPreviewBox.style.color = settings.eyecatcher.textColor || "#ffffff";
        bubblePreviewBox.style.backgroundColor = settings.bubble.bgColor || "#007bff";
        bubbleIcon.style.color = settings.bubble.iconColor || "#ffffff";
        chatBarPreviewBox.style.backgroundColor = settings.chatBar.bgColor || "#007bff";
        chatBarPreviewBox.style.color = settings.chatBar.textColor || "#ffffff";
        chatBarPreviewText.textContent = settings.chatBar.text || "Chat with us";

        // Trigger change event
        document.querySelector(`input[name="chat_option"][value="${settings.selectedOption}"]`).dispatchEvent(new Event('change'));
    } else {
        document.getElementById('eyecatcherRadio').checked = true;
        document.getElementById('eyecatcherRadio').dispatchEvent(new Event('change'));
    }
}

// Load settings on page load
window.addEventListener('DOMContentLoaded', loadSettings);
// Reset settings functionality