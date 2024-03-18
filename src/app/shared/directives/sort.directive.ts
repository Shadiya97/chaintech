import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { Employee } from '../../employee.model';
import { FullnamePipe } from '../pipes/fullname.pipe';

@Directive({
  selector: '[appSort]'
})
export class SortDirective {

@Input() data : Employee[] =[]
@Input() sortColumn !: string
isAscending:boolean=false;

sortFunctions: any = {
  age: () => {
    this.sortbyAge();
  },
  name: () => {
    this.sortbyName();
  },
};

constructor(private fullNamePipe: FullnamePipe, private renderer: Renderer2,private elRef:ElementRef) { }

ngOnInit(){
this.addIcon();
}

@HostListener('click') onClick() {

  this.isAscending = !this.isAscending;
  this.addIcon()

  this.sortFunctions[this.sortColumn]();

} 

addIcon(){
  const iconElement = this.renderer.createElement('i')
  this.renderer.addClass(iconElement,'fa')
  this.renderer.setStyle(iconElement,'cursor','pointer');
    this.renderer.setStyle(iconElement,'float','right');
    this.renderer.setStyle(iconElement,'margin','0.25em');


  if(!this.isAscending){
    this.renderer.addClass(iconElement, 'fa-sort-asc')
    this.renderer.removeClass(iconElement,'fa-sort-desc')
  }
  if(this.isAscending){
    this.renderer.removeClass(iconElement,'fa-sort-asc');
    this.renderer.addClass(iconElement,'fa-sort-desc')
  }

  const existingIcon = this.elRef.nativeElement.querySelector('i');
  if (existingIcon) {
    this.renderer.removeChild(this.elRef.nativeElement, existingIcon);
  }

  this.renderer.appendChild(this.elRef.nativeElement, iconElement);

}

sortbyAge(){

  this.data.sort((a,b)=>{
    return this.isAscending ? (+a.age - +b.age) : (+b.age - +a.age)
   })

}

sortbyName(){
  
  this.data.sort((a,b) => {

    const nameA = this.fullNamePipe.transform(a.name);
    const nameB = this.fullNamePipe.transform(b.name) 
    return this.isAscending? (nameA).localeCompare(nameB) : (nameB).localeCompare(nameA)
  })
}

}
