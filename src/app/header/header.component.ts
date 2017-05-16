import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
declare var jQuery:any ;
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	@ViewChild('visaMainMenu') el:ElementRef;
	constructor() {}

	ngOnInit() {
		var links=jQuery(this.el.nativeElement.children);
		for (var i = links.length - 1; i >= 0; i--) {
			links[i].click(function(e) {
				jQuery(".activeTab ").removeClass("activeTab");
				e.addClass("activeTab");
			});
		}
	}
	ngAfterViewInit() {


	}

}
