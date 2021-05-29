import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {
 cantidad=0;
 tengo = 'USB';
 quiero= 'EUR';
 total =0;
 monedas: String[]=['EUR','USB','LIBRA','PESO']
  constructor() { }

  ngOnInit(): void {
  }
  convertir(){
    switch(this.tengo){
      case 'USB':
        if(this.quiero==='USB'){
            this.total=this.cantidad;
        }
        if(this.quiero==='EUR'){
          this.total=this.cantidad*0.84;
        }
        if(this.quiero==='LIBRA'){
          this.total=this.cantidad*0.71;
        }
        if(this.quiero==='PESO'){
          this.total=this.cantidad*3,747.00;
        }
        if(this.quiero==='SOL'){
          this.total=this.cantidad*3.74;
        }
        break;
      
      case 'EUR':
        if(this.quiero==='USB'){
            this.total=this.cantidad*1.22;
        }
        if(this.quiero==='EUR'){
          this.total=this.cantidad;
        }
        if(this.quiero==='LIBRA'){
          this.total=this.cantidad*0.86;
        }
        if(this.quiero==='PESO'){
          this.total=this.cantidad*4,563.85;
        }
        if(this.quiero==='SOL'){
          this.total=this.cantidad*4.56;
        }
        
        break;
        case 'LIBRA':
          if(this.quiero==='USB'){
              this.total=this.cantidad*1.22;
          }
          if(this.quiero==='EUR'){
            this.total=this.cantidad*1.16;
          }
          if(this.quiero==='LIBRA'){
            this.total=this.cantidad;
          }
          if(this.quiero==='PESO'){
            this.total=this.cantidad*5,302.19;
          }
          if(this.quiero==='SOL'){
            this.total=this.cantidad*5.29;
          }

          break;
          case 'PESO':
            if(this.quiero==='USB'){
                this.total=this.cantidad*0.00027;
            }
            if(this.quiero==='EUR'){
              this.total=this.cantidad*0.00022;
            }
            if(this.quiero==='LIBRA'){
              this.total=this.cantidad*0.00019;
            }
            if(this.quiero==='PESO'){
              this.total=this.cantidad;
            }
            if(this.quiero==='SOL'){
              this.total=this.cantidad*0.0010;
            }
          
            break;
            case 'SOL':
              if(this.quiero==='USB'){
                  this.total=this.cantidad*0.27;
              }
              if(this.quiero==='EUR'){
                this.total=this.cantidad*0.22;
              }
              if(this.quiero==='LIBRA'){
                this.total=this.cantidad*0.19;
              }
              if(this.quiero==='PESO'){
                this.total=this.cantidad*1,234.93;
              }
              if(this.quiero==='SOL'){
                this.total=this.cantidad;
              }
            
              break;
      }
     
     
    }
  }


