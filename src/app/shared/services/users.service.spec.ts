import { Injectable } from '@angular/core';
import { SnackbarService } from './snackbar.service';
import { Router } from '@angular/router';
import { DialogeService } from './dialoge.service';
import { Iusers } from '../models/users.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private _snackbar : SnackbarService,
    private _router : Router,
    private _dialog : DialogeService
  ) { }

  usersArr : Array<Iusers> = [
    {
      userName: 'Bob Smith',
      userId: '1',
      personImg:
        'https://photocatchthemoment.com/wp-content/uploads/2016/01/business_headshot_linkedIn_profile-picture_Dublin_Rafael-Photography.jpg',
      userDetails:
        'Bob Smith is a seasoned project manager with a background in IT consulting. He has successfully led multiple teams in delivering complex software solutions. Bob enjoys traveling and playing tennis during weekends. He is passionate about mentoring young professionals and is involved in organizing tech meetups in his community. Bob is also an amateur chef and enjoys experimenting with new recipes. He volunteers at a local shelter, cooking meals for the homeless. Bob is an advocate for sustainable living and volunteers for environmental clean-up drives in his neighborhood.',
      userRole: 'admin',
    },
    {
      userName: 'Alice Johnson',
      userId: '2',
      personImg: 'https://wallpapercave.com/wp/wp7479519.jpg',
      userDetails:
        'Alice Johnson is a passionate software engineer with 5 years of experience in developing web applications. She specializes in front-end technologies like Angular and React. Alice loves photography and hiking in her free time. She is currently learning mobile app development and is excited about the possibilities of creating innovative mobile applications. Alice also volunteers at local coding bootcamps to mentor aspiring developers. In addition to her technical skills, Alice is fluent in Spanish and has a keen interest in learning new languages. She is an advocate for gender diversity in tech and actively participates in initiatives promoting women in STEM.',
      userRole: 'admin',
    },

    {
      userName: 'Charlie Brown',
      userId: '3',
      personImg:
        'https://sb.kaleidousercontent.com/67418/1920x1545/c5f15ac173/samuel-raita-ridxdghg7pw-unsplash.jpg',
      userDetails:
        'Charlie Brown is a creative designer with a passion for user experience (UX) and user interface (UI) design. He has worked on various mobile and web applications, focusing on creating intuitive and visually appealing interfaces. Charlie is also an advocate for accessibility in design and regularly contributes to open-source projects that promote inclusive design practices. In his spare time, Charlie enjoys playing the guitar and composing music. He is an avid cyclist and participates in charity rides to raise funds for environmental causes. Charlie volunteers at a local art therapy center, helping children express themselves through art.',
      userRole: 'buyer',
    },
    {
      userName: 'Diana Martinez',
      userId: '4',
      personImg:
        'https://www.lensmen.ie/wp-content/uploads/2015/02/Profile-Portrait-Photographer-in-Dublin-Ireland.-1030x1030.jpg',
      userDetails:
        'Diana Martinez is a skilled photographer specializing in portrait and event photography. She captures moments that tell stories and evoke emotions. Diana is also passionate about traveling and exploring different cultures. She volunteers her photography skills for non-profit organizations, documenting their impactful work. Diana is a certified scuba diver and enjoys underwater photography. She is learning to play the piano as a hobby and volunteers as a photography instructor for underprivileged youth in her community.',
      userRole: 'buyer',
    },
    {
      userName: 'Frank Wilson',
      userId: '5',
      personImg:
        'https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg',
      userDetails:
        'Frank Wilson is a cheerful customer support specialist known for his problem-solving skills and friendly demeanor. He has a knack for understanding customer needs and providing effective solutions. Frank enjoys playing guitar and volunteering in his community. He is passionate about environmental conservation and actively participates in local clean-up initiatives. Frank is also a certified yoga instructor and conducts weekly yoga classes for his colleagues. He is an advocate for mental health awareness and promotes mindfulness practices. Frank is learning to speak French and hopes to visit France in the near future.',
      userRole: 'admin',
    },
    // Add more users with 'admin' or 'buyer' roles here
    {
      userName: 'Emily Davis',
      userId: '6',
      personImg:
        'https://c.pxhere.com/photos/44/99/young_woman_portrait_beautiful_happy_face_smile-1323792.jpg!d',
      userDetails:
        'Emily Davis is a dedicated marketing manager with experience in digital marketing and brand strategy. She enjoys creating engaging content and analyzing marketing campaigns to drive business growth. Emily is an avid reader and a coffee enthusiast. She is currently pursuing a Master’s degree in Marketing Analytics to deepen her analytical skills. Emily is also a volunteer tutor at a local community center, helping students with their academic studies. She enjoys running marathons and is training for her next race. Emily is an advocate for children’s literacy and volunteers as a reading mentor for elementary school students.',
      userRole: 'buyer',
    },
    {
      userName: 'Grace Lee',
      userId: '7',
      personImg:
        'https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=612x612&w=0&k=20&c=EqR2Lffp4tkIYzpqYh8aYIPRr-gmZliRHRxcQC5yylY=',
      userDetails:
        'Grace Lee is a talented graphic designer with a passion for creating visually stunning designs. She has worked on branding projects for various clients, focusing on delivering impactful design solutions. Grace enjoys painting and exploring art galleries in her spare time. She is also a certified personal trainer and promotes fitness and healthy living among her friends and colleagues. Grace is actively involved in animal welfare activities and volunteers at a local animal shelter. She is learning to play the violin as a hobby.',
      userRole: 'buyer',
    },
    {
      userName: 'Henry Taylor',
      userId: '8',
      personImg:
        'https://www.kevinashleyphotography.com/wp-content/uploads/2015/11/person.jpg',
      userDetails:
        'Henry Taylor is an experienced financial analyst with expertise in financial modeling and data analysis. He has worked in investment banking and corporate finance, analyzing market trends and advising clients on investment strategies. Henry is a sports enthusiast and enjoys playing soccer on weekends. He also volunteers as a financial literacy educator for high school students, helping them understand the basics of personal finance. Henry is passionate about history and enjoys visiting museums in his spare time. He is an advocate for equal access to education and volunteers as a mentor for first-generation college students.',
      userRole: 'buyer',
    },
    {
      userName: 'Isabel Garcia',
      userId: '9',
      personImg:
        'https://sportingclass.com/wp-content/uploads/2014/11/Young-business-woman-in-office.jpg',
      userDetails:
        'Isabel Garcia is a dedicated nurse with a compassionate approach to patient care. She has experience in emergency medicine and surgical nursing, providing critical care in challenging situations. Isabel loves hiking and spending time outdoors with her family. She is pursuing further studies in nursing research to contribute to evidence-based practice. Isabel is also an advocate for mental health awareness and conducts workshops on stress management. She enjoys painting and has exhibited her artwork in local galleries. Isabel volunteers at a local healthcare clinic, providing free health screenings to underserved communities.',
      userRole: 'buyer',
    },
    {
      userName: 'Jack Robinson',
      userId: '10',
      personImg:
        'https://i.pinimg.com/originals/e5/3c/6b/e53c6bfa45da3f684fda60c4b21b1307.jpg',
      userDetails:
        'Jack Robinson is an ambitious software developer specializing in backend technologies such as Node.js and Python. He enjoys solving complex problems and optimizing code for performance. Jack is also passionate about astronomy and stargazing in his free time. He actively participates in hackathons and developer conferences to stay updated with the latest technologies. Jack is a volunteer coding instructor at a local youth center, teaching programming skills to underprivileged children. He is also learning to play the piano and is part of a local community band. Jack volunteers at a wildlife conservation organization, helping protect endangered species.',
      userRole: 'admin',
    },
  ];

fetchUsers(){
  return this.usersArr
}

getUserDetails(id : string):Iusers{
  return this.usersArr.find(user => user.userId===id)as Iusers
}

addUser(userObj:Iusers){
  this.usersArr.push(userObj);
  this._snackbar.openSnackbar(`User ${userObj.userName} is Added Successfully !! 👍`);
  this._router.navigate(['/users'])
}

updateUser(updatedObj : Iusers){
  let getUpdateId =this.usersArr.findIndex(user=>user.userId===updatedObj.userId);
  this.usersArr[getUpdateId]=updatedObj;
  this._snackbar.openSnackbar(`User ${updatedObj.userName} is updated successfully !! 👍 `);
  this._router.navigate(['/users'])
}

removeUser(removeId:string){

let userName = this.usersArr.find(user=>user.userId===removeId)?.userName
this._dialog.openDialog('Confirmation', `Are You sure ? You want to remove ${userName} User?`)
.subscribe(res=>{
  if(res){
    let removeIndex = this.usersArr.findIndex((user:Iusers)=>user.userId===removeId);
    this.usersArr.splice(removeIndex,1);
    this._snackbar.openSnackbar(`User ${userName} is removed successfully !! 👍`);
    this._router.navigate(['/users'])
  }
})
}
}

