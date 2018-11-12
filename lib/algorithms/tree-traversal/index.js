import CreateNode from "../base/node";

export default class TreeTraversal{
    constructor(params) {
       this.nodes = {}; 
    }
    createNodes(arr){
        arr.map((node,index)=>{
            let key =`${node}`;
            this.nodes[key] = new CreateNode(node);
        })
        // console.log(this.nodes)
        return this.nodes;
    }
    setRoot(node){
        this.nodes.root = node;
        this.nodes[node.data].isRoot = true;
        // console.info(this.nodes);
    }
    setLeft(node,target){
        target.left = node.data;
        return true;
    }
    setRight(node,target){
        target.right = node.data;
        return true;
    }
    PreOrderTree(root,tree=[]){
        tree.push(root.data);
        if(root && root.left){
            this.PreOrderTree(this.nodes[root.left],tree);
        }
        if(root && root.right){
            this.PreOrderTree(this.nodes[root.right],tree);            
        }
        console.info('pre-order',tree);
        return tree;
    }
    inOrderTree(root,tree=[]){
        if(root && root.left){
            this.inOrderTree(this.nodes[root.left],tree);
        }
        tree.push(root.data);
        if(root && root.right){
            this.inOrderTree(this.nodes[root.right],tree);            
        }
        console.info('in-order',tree);
        return tree;
    }
    postOrderTree(root,tree=[]){
        if(root && root.left){
            this.postOrderTree(this.nodes[root.left],tree);
        }
        if(root && root.right){
            this.postOrderTree(this.nodes[root.right],tree);            
        }
        tree.push(root.data);
        console.info('post-order',tree);
        return tree;
    }
}