import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'LoginPage';

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: 'HomePage' },
      { title: 'Check-in', component: 'CheckInPage' },
      { title: 'Sorteio', component: 'SorteioPage' },
      { title: 'Mesas', component: 'MesasPage' },
      { title: 'Nova Mesa', component: 'MesasAdicionarPage' },
      { title: 'Participar Mesa', component: 'MesasParticiparPage' },
      { title: 'Quizz', component: 'QuizzPage' },
      { title: 'Quantidade de Cerveja', component: 'QuantidadeCervejaPage' },
      { title: 'Galeria de Premios', component: 'GaleriaPremiosPage' },
      { title: 'Cupom eletronico', component: 'CupomPage' },
      { title: 'Premios resgatados', component: 'ResgatadosPage' },
      { title: 'Promoções', component: 'PromocoesPage' },
      { title: 'Notificações', component: 'NotificacoesPage' },
      { title: 'Campanhas', component: 'CampanhasPage' },
      { title: 'Bares Participantes', component: 'BaresParticipantesPage' },
      { title: 'Redes sociais', component: 'RedesSociaisPage' },
      { title: 'Perfil', component: 'PerfilPage' },
      { title: 'BI', component: 'BIPage' },
      { title: 'Check-Out', component: 'CheckOutPage' },
      { title: 'Logout', component: 'LogoutPage' },
      { title: 'Calculadora', component: 'CalculadoraPage' },
      { title: 'Chat', component: 'ChatPage' },
      { title: 'Video treinamento', component: 'VideoTreinamentoPage' },
      { title: 'Galeria', component: 'GaleriaPage' },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  
  perfil(){
      this.nav.push('PerfilPage');
  }
  
}
