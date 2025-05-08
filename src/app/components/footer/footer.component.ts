import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';

interface TreeNode {
  name: string;
  children?: TreeNode[];
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  treeControl = new NestedTreeControl<TreeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<TreeNode>();

  constructor() {
    this.dataSource.data = [
      {
        name: 'Hype Streetwear',
        children: [
          { name: 'No solo somos una tienda de ropa, somos una startup cuyo propósito es revolucionar el mundo de la ropa.' }
        ]
      },
      {
        name: 'Tecnologías',
        children: [
          { name: 'Angular' },
          { name: 'Node js' },
          { name: 'Bootstrap' },
          { name: 'Scss' }
        ]
      },
      {
        name: '¿Qué buscas?',
        children: [
          { name: 'Nosotros' },
          { name: 'Productos' },
          { name: 'Favoritos' },
          { name: 'Carrito' }
        ]
      },
      {
        name: 'Contacto',
        children: [
          { name: 'Talavera de la Reina' },
          { name: 'info@example.com' },
          { name: '+34 600 600 88' },
          { name: '+34 600 600 89' }
        ]
      }
    ];
  }

  hasChild = (_: number, node: TreeNode) => !!node.children && node.children.length > 0;

}
