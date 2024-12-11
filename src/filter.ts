import { bindable } from "aurelia-framework";
import { Region, REGIONS } from "types/constants";

export class Filter {
  @bindable public onRegionChange: (region: Region) => void;

  public regions = REGIONS;
  public selectedRegion = "";
  public isOpen = false;

  constructor() {
    document.addEventListener("click", () => {
      if (this.isOpen) {
        this.setDropdownState(false);
      }
    });
  }

  public selectRegion(region: Region) {
    this.selectedRegion = region;
    this.setDropdownState(false);
    this.onRegionChange(region);
  }

  private setDropdownState(isOpen: boolean) {
    this.isOpen = isOpen;
    document.body.classList.toggle("pointer-events-none", isOpen);
  }

  public toggleDropdown(event: MouseEvent) {
    this.isOpen = !this.isOpen;
    this.setDropdownState(this.isOpen);
  }
}
