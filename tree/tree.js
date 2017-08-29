/**
 * tree
 * stackPreOrderIterator深度优先搜索-基于堆栈的先序遍历[递归]
 */
var tree = [
    {
        label: "1",
        isExpandable: true,
        id: 1,
        children: [
            {
                label: "1-2-1",
                id: 2
            },
            {
                label: "1-2-2",
                id: 5,
                children: [
                    {
                        label: "1-3-1",
                        id: 7,
                    },
                    {
                        label: "1-3-2",
                        id: 8,
                    },
                    {
                        label: "1-3-3",
                        id: 8,
                    }
                ]
            },
            {
                label: "1-1-3",
                id: 2
            }
        ]
    },
    {
        label: "2",
        id: 3,
    }
];

/**
 * 深度优先搜索-基于堆栈的先序遍历[递归]
 */
function stackPreOrderIterator() {
    var iterator = function (node, stack) {
        if (!node || (stack && stack.length <= 0)) {
            return;
        }
        stack = stack || [];
        node.children = node.children || [];
        stack.push(node);
        console.log(111, node.label, stack.length);
        if (node.children.length <= 0) {
            if(stack.length <= 1) {//栈中只有根节点
                stack.pop();
                return;
            }
            var nextNode, newStack = stack.slice(0, stack.length);
            for(var i = stack.length - 2; i >= 0; i--) {
                var parentNode = stack[i];
                var children = parentNode.children || [];
                var currentNode = stack[i + 1];
                var index = children.indexOf(currentNode);
                // console.log(222, index, parentNode.label);
                if (index > -1) {
                    if (index < children.length - 1) {
                        nextNode = children[index + 1];
                        newStack.pop();
                        break;
                    } else {
                        newStack.pop();
                    }
                }
            }
            // console.log(333, newStack.length, node.label, nextNode);
            iterator(nextNode, newStack);
        }
        else {
            // console.log(999, stack.length, node.label);
            iterator(node.children[0], stack);
        }
    };
    tree.forEach(function(node) {
        iterator(node);
    });
}

init();

function init() {
    stackIterator();
}
