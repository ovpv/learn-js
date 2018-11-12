// import Window from './window';
// import Challenges from './challenges';
// import ArrayClass from './array';
import TreeTraversal from './algorithms/tree-traversal';

// var MyWindow = new Window();
// MyWindow.init();

//js challenges
// var MyChallenge = new Challenges();
// MyChallenge.init();

//Array class
// const arr = new ArrayClass();
// arr.init();

const tt = new TreeTraversal();

const a = tt.createNodes(['n1','n2','n3','n4','n5','n6']);
tt.setRoot(a.n1);
tt.setLeft(a.n2,a.root);
tt.setRight(a.n3,a.root);
tt.setLeft(a.n4,a.n2);
tt.setRight(a.n5,a.n2);
tt.PreOrderTree(a.root);
tt.inOrderTree(a.root);
tt.postOrderTree(a.root);
console.log(a);
