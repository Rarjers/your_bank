import { Component } from '@angular/core';


interface asketText {
  name: string,
  description: string,
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss', './main-page.adapt.scss'],
})
export class MainPageComponent {

  showAll = false;
  
  asketItems: asketText[] = [
    {name: "How do I open an account with YourBank?", description: "Opening an account with YourBank is easy. Simply visit our website and click on the 'Open an Account' button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help."},
    {name: "What documents do I need to provide to apply for a loan?", description: "The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process."},
    {name: "How can I access my accounts online?", description: "Accessing your accounts online is simple and secure. Visit our website and click on the 'Login' button. Enter your username and password to access your accounts. If you haven't registered for online banking, click on the 'Enroll Now' button and follow the registration process. If you need assistance, our customer support team is available to guide you."},
    {name: "How can I access my accounts online?", description: "Accessing your accounts online is simple and secure. Visit our website and click on the 'Login' button. Enter your username and password to access your accounts. If you haven't registered for online banking, click on the 'Enroll Now' button and follow the registration process. If you need assistance, our customer support team is available to guide you."},
    {name: "How can I access my accounts online?", description: "Accessing your accounts online is simple and secure. Visit our website and click on the 'Login' button. Enter your username and password to access your accounts. If you haven't registered for online banking, click on the 'Enroll Now' button and follow the registration process. If you need assistance, our customer support team is available to guide you."},
    {name: "How can I access my accounts online?", description: "Accessing your accounts online is simple and secure. Visit our website and click on the 'Login' button. Enter your username and password to access your accounts. If you haven't registered for online banking, click on the 'Enroll Now' button and follow the registration process. If you need assistance, our customer support team is available to guide you."},
    {name: "How can I access my accounts online?", description: "Accessing your accounts online is simple and secure. Visit our website and click on the 'Login' button. Enter your username and password to access your accounts. If you haven't registered for online banking, click on the 'Enroll Now' button and follow the registration process. If you need assistance, our customer support team is available to guide you."},
  ]
}
