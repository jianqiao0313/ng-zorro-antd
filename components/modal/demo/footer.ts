import { Component } from '@angular/core';


@Component({
  selector: 'nz-demo-modal-footer',
  template: `
    <button nz-button nzType="primary" (click)="showModal()">
      <span>Show Modal</span>
    </button>
    <nz-modal [(nzVisible)]="isVisible" [nzTitle]="modalTitle" [nzContent]="modalContent" [nzFooter]="modalFooter" (nzOnCancel)="handleCancel($event)">
      <ng-template #modalTitle>
        Custom Modal Title
      </ng-template>

      <ng-template #modalContent>
        <p>Modal Content</p>
        <p>Modal Content</p>
        <p>Modal Content</p>
        <p>Modal Content</p>
        <p>Modal Content</p>
      </ng-template>

      <ng-template #modalFooter>
        <span>Modal Footer: </span>
        <button nz-button nzType="default" (click)="handleCancel($event)">Custom Callback</button>
        <button nz-button nzType="primary" (click)="handleOk($event)" [nzLoading]="isConfirmLoading">Custom Submit</button>
      </ng-template>
    </nz-modal>
  `,
  styles: []
})
export class NzDemoModalFooterComponent {
  isVisible = false;
  isConfirmLoading = false;

  constructor() { }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk($event: MouseEvent): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 3000);
  }

  handleCancel($event: MouseEvent): void {
    this.isVisible = false;
  }
}
