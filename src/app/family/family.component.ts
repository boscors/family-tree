import { Component, OnInit } from '@angular/core';
import { FamilyMember } from '../family-member';
import { FAMILYTREE } from '../mock-family-tree';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements OnInit {

  familyTree = FAMILYTREE;
  selectedFamilyMember : FamilyMember;

  familyOffspring(familyMemberCode: string): number[] {
    let offspring  = [];
    for (let i of this.familyTree) {
      if (familyMemberCode == '0') {
        if ( (i.familyCode.indexOf('.') == -1) && ( parseInt(i.familyCode) > 0 ) ) {
          offspring.push(this.familyTree.indexOf(i));
          console.log('FUNCIONA', i.name);
        }
      } else {
        if (i.familyCode.startsWith(familyMemberCode)) {
          let couplesAndDescendants = i.familyCode.substring((familyMemberCode.length + 1),i.familyCode.length);
          //console.log('substring', coupleAndDescendants);
          if (couplesAndDescendants.indexOf('.') == -1) {
            if ( parseInt(couplesAndDescendants) > 0 ) {
              console.log('FUNCIONA', i.name);
              offspring.push(this.familyTree.indexOf(i));
              console.log(this.familyTree.indexOf(i))
            }
          }
        }
      }
    }
    return offspring;
  }

  selectedFamilyMemberCouples(familyMemberCode: string): number[] {
    let couples  = [];
    console.log('code', familyMemberCode);
    for (let i of this.familyTree) {
      if (i.familyCode.startsWith(familyMemberCode)) {
        let couplesAndDescendants = i.familyCode.substring((familyMemberCode.length),i.familyCode.length);
        if (couplesAndDescendants.indexOf('.0') > -1) {
          console.log('couplesAndDescendants', couplesAndDescendants);
          console.log('FUNCIONA', i.name);
          couples.push(this.familyTree.indexOf(i));
        }
      }
    }
    return couples;
  }

  constructor() { }

  ngOnInit(): void {
    this.selectedFamilyMember = this.familyTree[0];
    //this.familyOffspring('3');
  }

}
