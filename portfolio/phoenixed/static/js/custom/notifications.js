function replacePlaceholder(text, placeholder, replacementText) {
    return text.replace(placeholder, replacementText);
}

function generateTimeText(time) {
    let epochTimestamp = (new Date()).getTime() / 1000;
    let timeDiff = epochTimestamp - time;

    if (timeDiff < 60)
        return 'Less than a minute ago';
    if (timeDiff >= 60 && timeDiff < 3600)
        return Math.floor(timeDiff / 60) + ' minutes ago';
    if (timeDiff >= 3600 && timeDiff < 86400)
        return Math.floor((timeDiff / 60) / 60) + ' hours ago';
    if (timeDiff >= 86400 && timeDiff < 604800)
        return Math.floor(((timeDiff / 60) / 60) / 24) + ' days ago';
}

var notificationTag = '<a id=\"@id@\" class=\"dropdown-item notify-item active\"></a>';
var $notificationDivTag = $("<div class=\"notify-icon\"></div>"); // <img src=\"{{ url_for('static', filename='images/users/user-1.jpg') }}\" class=\"img-fluid rounded-circle\" alt=\"\" />
var notificationNameTag = '<p class="notify-details">@name@</p>';
var notificationTimeTag = '<small class="text-muted">@data@</small>';

function incrementMessage() {
    let current = $('#message_count').text();
    current++;
    $('#message_count').text(current);
    $('#message_count').css('visibility', current > 0 ? 'visible' : 'hidden');
}

function decrementMessage() {
    let current = $('#message_count').text();
    current--;
    $('#message_count').text(current);
    $('#message_count').css('visibility', current > 0 ? 'visible' : 'hidden');
}

function generateNotification(notification) {
    let $notificationTag = $(replacePlaceholder(notificationTag, '@id@', notification['id']));
    let $notificationNameTag = $(replacePlaceholder(notificationNameTag, '@name@', notification['name']));
    let $notificationTimeTag = $(replacePlaceholder(notificationTimeTag, '@data@', notification['time']));
    $notificationNameTag.append($notificationTimeTag);

    $notificationTag.append($notificationDivTag);
    $notificationTag.append($notificationNameTag);

    return $notificationTag;
}

function handleNewNotification(notification) {
    $('#notification-bar').prepend(generateNotification(notification));
    $('#' + notification['id']).click(function() {
        notificationSocket.emit("handle notification", notification['id']);
        $('#' + notification['id']).remove();
    });
}

$(document).ready(function() {
    var notificationSocket = io('/notifications');

    notificationSocket.on('notifications', data => {
        set_message_count(data['notifications'].length);
        $.each(data['notifications'], notification => {
            handleNewNotification(notification);
        });
    });

    notificationSocket.on('notify', data => {
        incrementMessage();
        result = JSON.parse(data);
        handleNewNotification(result);
    });

    $('#notification-clear-all').click(function() {
        notificationSocket.emit("clear all", () => {
            $("#notification-list").empty();
        });
    });

    $.ajax({
        url: '/notifications',
        success: function(data) {
            $(data).each((index, notification) => {
                handleNewNotification(notification);
            });
        }
    });
})