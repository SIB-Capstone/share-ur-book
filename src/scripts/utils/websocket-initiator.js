import NotificationHelper from './notification-helper';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    NotificationHelper.sendNotification({
      title: 'Sudahkan baca buku hari ini?',
    });
  },
};
export default WebSocketInitiator;