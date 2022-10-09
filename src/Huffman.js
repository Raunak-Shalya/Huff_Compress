const Huffmanfunc = (text) => {
    //edge-case
    if(text.length==0) return 0;
   //Extracting frequency and chars from text
   var dict={};
   var n=0;
   for(var i=0;i<text.length;i++){
    const has=text[i] in dict;
       if(!(has)) { dict[text[i]]=1; n++;}
       else dict[text[i]]=dict[text[i]]+1;
   }
   if(n==1) return text.length;
//    if(' ' in dict) console.log(dict[' ']);
    let charArray =[];
    let charfreq = [];
    for (const [key, value] of Object.entries(dict)) {
        charArray.push(key);
        charfreq.push(value);
    }
   //Huffman Algorithm
   class HuffmanNode
    {
    constructor()
     {
        this.data = 0;
        this.c = '';
        this.left = this.right = null;
     }
    }
        //creating a priority-queue(Min-Heap)
        let q = [];
        for (let i = 0; i < n; i++) {
            //creating Huffman Node for every unique char
            let hn = new HuffmanNode();

            hn.c = charArray[i];
            hn.data = charfreq[i];

            hn.left = null;
            hn.right = null;
            //

            // pushing Huffman Node in the priority queue
            q.push(hn);
        }
   
        //sorting inorder to make the array minheap
        q.sort(function(a,b){return a.data-b.data;});

        // create a root node
        let root = null;
         
        /* Here we will extract the two minimum value from the heap each time until
        its size reduces to 1, extract until all the nodes are extracted.*/
        while (q.length > 1) {
            // first min extract.
            let x = q[0];
            q.shift();
   
            // second min extract.
            let y = q[0];
            q.shift();
   
            // new node f which is equal
            let f = new HuffmanNode();
   
            /* to the sum of the frequency of the two nodes
             assigning values to the f node.*/
            f.data = x.data + y.data;
            f.c = '`';
   
            // first extracted node as left child.
            f.left = x;
   
            // second extracted node as the right child.
            f.right = y;
   
            // marking the f node as the root node.
            root = f;
   
            // add this node to the priority-queue.
            q.push(f);
            q.sort(function(a,b){return a.data-b.data;});
        }
        // Hash the codes by traversing the tree
        var ans={};
        Hashans(root, "");
        function Hashans(root,s)
        {
            // base case; if the left and right are null
            // then its a leaf node and we print
            // the code s generated by traversing the tree.
            if (root.left == null && root.right == null && root.c!='`') {
                // c is the character in the node
               ans[root.c]=s.length;
               return;
            }
    
            // if we go to left then add "0" to the code.
            // if we go to the right add"1" to the code.
    
            // recursive calls for left and
            // right sub-tree of the generated tree.
            Hashans(root.left, s + "0");
            Hashans(root.right, s + "1");
        }
        console.log(ans['a'])
        //counting all the bits in text
        var sum=0;
        for( i=0;i<text.length;i++){
            sum+=ans[text[i]];
        }
        return sum;
}

export default Huffmanfunc