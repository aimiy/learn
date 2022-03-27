function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
let changeTree = {
    arrToObj:function(arr){
        return {}
    },
    arrToPic:function(arr){
        return console.log("  4\n / \\\n5   6")
    },
    objToPic:function(obj){
        return console.log("  4\n / \\\n5   6")
    }
}
// let a = new TreeNode(6);

// let b = new TreeNode(5);
// b.left = a;
// console.log(a,b)

// let c = {
//     val: 2,
//     left: {
//         val: 7
//     },
//     right: {
//         val: 4
//     }
// }
// let d = {
//     val: 2,
//     left: {
//         val: 7
//     },
//     right: {
//         val: 4
//     }
// }

// console.log(a==b.left,c.left==c.left)
