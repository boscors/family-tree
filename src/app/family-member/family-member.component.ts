import { Component, OnInit, Input } from '@angular/core';
import { FamilyMember } from '../family-member';

@Component({
  selector: 'app-family-member',
  templateUrl: './family-member.component.html',
  styleUrls: ['./family-member.component.scss']
})
export class FamilyMemberComponent implements OnInit {

  @Input() member: FamilyMember;

  constructor() { }

  ngOnInit(): void {
  }

}
