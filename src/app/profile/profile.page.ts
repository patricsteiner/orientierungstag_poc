import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';
import {StorageService} from '../services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  questions = ['Ich mache mehrmals pro Woche Sport',
    'Ich lote gerne meine Grenzen aus',
    'Abwechslungsreiche Erlebnisse stehen im Zentrum', 'Teamerfolg ist mir wichtig'];

  answers = this.questions.map(() => 0);

  constructor(private navCtrl: NavController, private storage: StorageService) {
  }

  ngOnInit() {
  }

  submit() {
    this.storage.save('ANSWERS', JSON.stringify(this.answers));
    this.navCtrl.navigateForward(['profile/result']);
  }
}
