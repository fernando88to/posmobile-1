import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController } from 'ionic-angular';

import { Contacts, Contact, ContactFieldType } from '@ionic-native/contacts';

@Component({
  selector: 'page-contatos',
  templateUrl: 'contatos.html'
})
export class ContatosPage {

  contactsList:Contact[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public contacts:Contacts,
    private alertCtrl:AlertController,
    private modalCtrl: ModalController
  ) {
    this.obterListaContatos();
  }

  obterListaContatos() {
    let fields:ContactFieldType[] = ['id', 'displayName'];
    let options = {multiple: true};

    this.contacts.find(fields, options)
      .then(data => this.contactsList = data)
      .catch(error => this.exibirMsgErro());
  }

  exibirMsgErro() {
    let alert = this.alertCtrl.create({
      title: 'Erro!',
      subTitle: 'Parece que você não possui contatos disponíveis!',
      buttons: ['OK']
    });
    alert.present();
  }



}