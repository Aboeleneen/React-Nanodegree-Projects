import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions'
import AsyncStorage from '@react-native-async-storage/async-storage';

const NOTIFICATIONS_KEY = 'mobile-flascard-notifications'

export const clearLocalNotifications = async ()=>{
  await AsyncStorage.removeItem(NOTIFICATIONS_KEY);
  Notifications.cancelAllScheduledNotificationsAsync();
}

const createNotification = ()=>{
    return {
      title: "Study with Flashcards",
      body: "📖 Don't forget to study today!",
      ios : {
        sound : true ,
      } ,
      android :{
        sound : true ,
        priorirt : 'high' ,
        sticky : false ,
        vibrate:true,
      }
    }
}
export const setLocalNotifications = async ()=>{
  await     AsyncStorage.removeItem(NOTIFICATIONS_KEY)
  AsyncStorage.getItem(NOTIFICATIONS_KEY)
    .then(JSON.parse)
    .then((data)=>{
        if(data === null){
          Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({status})=>{
              console.log(status)
              if(status === 'granted'){
                Notifications.cancelAllScheduledNotificationsAsync()

                let tommorow = new Date()
                //tommorow.setDate(tommorow.getDate() +1)
                tommorow.setSeconds(tommorow.getSeconds()+10)
                //tommorow.setHours(13)
                //tommorow.setMinutes(0)

                Notifications.scheduleNotificationAsync(
                    {  content: {
                            title: 'Complete a quiz',
                            body: "👋 Don't forget solve a quiz today!",
                          },
                          trigger: {
                            type: 'daily',
                            hour: 15,
                            minute: 42,
                    },  }
                )
                console.log("Notifications" , tommorow)
                AsyncStorage.setItem(NOTIFICATIONS_KEY , JSON.stringify(true))
              }


            })
        }
    })
}
