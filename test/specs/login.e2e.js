import userData from '../data/userData.json' with {type: "json"};
import { expect } from '@wdio/globals'
import { $ } from '@wdio/globals'
import MenuScreen from '../screen/android/menu.screen.js'  
import LoginScreen from '../screen/android/login.screen.js'

describe('My Login application', () => {
    it('should login with invalid credentials', async () => {
       await MenuScreen.accessLoginScreen()
       await LoginScreen.fillLoginForm(userData.userFail.username, userData.userFail.password) 
       await expect($(LoginScreen.errorMessage)).toHaveText("Provided credentials do not match any user in this service.")
    })

    it('should login with valid credentials', async () => {
        await MenuScreen.accessLoginScreen()
        await LoginScreen.fillLoginForm(userData.userSuccess.username, userData.userSuccess.password)  
       
     })
})

