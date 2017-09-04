import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProgramPage } from '../programs/program';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	PROGRAMS = [
		{id: 1, name:'Awesome Inc',
			description: 'Our mission is to help people pursue their definition of awesome! We exist to create and grow high tech startups, which we do by hosting community events, leading technology education courses, and offering a shared workspace.',
			imageURL: 'assets/img/AInc_logo.png',
			imageAlt: 'Awesome Inc Logo'
		},
		{id: 2, name:'Awesome Inc University',
			description: 'Helping people learn to code and unlock the power to create their own Mobile Apps, Websites, and Video Games.',
			imageURL: 'assets/img/AIncU_logo.png',
			imageAlt: 'Awesome Inc U Logo'
		},
		{id: 3, name:'Awesome Inc Fellowship',
			description: 'A mentor-driven program designed to accelerate your high tech startup.',
			imageURL: 'assets/img/fellowship_logo.png',
			imageAlt: 'Fellowship Logo'
		},
		{id: 4, name:'APAX Software',
			description: 'High Quality Custom Software Solutions',
			imageURL: 'assets/img/apax_logo.png',
			imageAlt: 'APAX Logo'
		},
		{id: 5, name:'Awesome Inc Team Alpha',
			description: 'Team Alpha is a group of talented interns that work with each other to help make Awesome Inc a better place. Our primary needs are for people interested in video, web development, and graphic design. We also need event coordinators, social media whizzes, marketing and PR people, as well as writers for our blogs.',
			imageURL: 'assets/img/teamalpha_logo.png',
			imageAlt: 'Team Alpha Logo'
		},
		{id: 6, name:'Kentucky Entrepreneur Hall of Fame',
			description: 'The Kentucky Entrepreneur Hall of Fame honors, shares, and celebrates the stories of Kentuckys most successful entrepreneurs.',
			imageURL: 'assets/img/ehof_logo.png',
			imageAlt: 'EHOF Logo'
		},
		{id: 7, name:'Startup Weekend',
			description: 'Anyone is welcome to pitch their startup idea at the beginning of the 3-day weekend event. Teams organically form around the top ideas and then its a 54 hours frenzy of business model creation, coding, designing, and market validation.',
			imageURL: 'assets/img/sw_logo.png',
			imageAlt: 'Startup Weekend Logo'
		},
		{id: 8, name:'5 Across',
			description: '5 pitches; 5 minutes per pitch; $500 prize; 5pm - 7pm; $5 admission',
			imageURL: 'assets/img/5across_logo.png',
			imageAlt: '5 Across Logo'
		},
		{id: 9, name:'Cherub Fund',
			description: 'Formed in 2013 in order to grow the startup community in Kentucky, the Cherub Fund is comprised of entrepreneurs, angel investors, and supporters of entrepreneurship.',
			imageURL: 'assets/img/CherubFund_logo.png',
			imageAlt: 'Cherub Fund Logo'
		},
		{id: 10, name:'I have an idea!',
			description: 'Have an idea? Tell us about it! Promoting Entrepreneurship is the main goal of Awesome Inc!',
			imageURL: 'assets/img/idea_logo.png',
			imageAlt: 'Idea Light-bulb Logo'
		},
		{id: 11, name:'Something Else?',
			description: 'Welcome to Awesome Inc!',
			imageURL: 'assets/img/AInc_logo.png',
			imageAlt: 'Awesome Inc Logo'
		}
	];

	constructor(public navCtrl: NavController) {

	}

	goToProgram(program) {
		console.log('Hello World');
		this.navCtrl.push(ProgramPage, { currentProgram: program });
	}
}
