// import PushNotification from 'react-native-push-notification';

// export const configurePushNotifications = () => {
//   PushNotification.configure({
//     onNotification: function (notification) {
//       console.log('NOTIFICATION:', notification);
//     },
//     permissions: {
//       alert: true,
//       badge: true,
//       sound: true,
//     },
//     popInitialNotification: true,
//     requestPermissions: true,
//   });
// };

// export const scheduleNotification = (medication) => {
//   PushNotification.localNotificationSchedule({
//     title: "Medication Reminder",
//     message: `Time to take ${medication.name}`,
//     date: new Date(medication.time),
//     repeatType: medication.repeat,
//     playSound: true,
//   });
// }; 