import { Component, OnInit } from '@angular/core';
import { MenuNameService } from 'src/app/services/menu-name-service.service';

@Component({
	selector: 'app-menu-links',
	templateUrl: './menu-links.component.html',
	styleUrls: ['./menu-links.component.scss'],
})
export class MenuLinksComponent implements OnInit {
	menuString: string;
	breakfastButton: string;
	lunchButton: string;
	drinksButton: string;
	sideDishesButton: string;

	constructor(private menuNameService: MenuNameService) {
		this.breakfastButton = 'D';
		this.lunchButton = 'P';
		this.drinksButton = 'B';
		this.sideDishesButton = 'A';

		this.menuNameService.currentString.subscribe(value => {
			this.menuString = value;
		});
	}

	evento(name) {
		this.menuNameService.changeString(name);
	}

	ngOnInit(): void {}
}
