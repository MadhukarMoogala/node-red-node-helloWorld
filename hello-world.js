module.exports = function(RED) {
    function HelloWorldNode(config) {
        /**
         * To initialise the features shared by all nodes. After that, the node-specific code lives.
         */
        RED.nodes.createNode(this, config);
        var node = this;
        node.bucketkey = config.bucketkey;
        /**
         * The node registers a listener to the input event 
        which gets called whenever a message arrives at the node
         */
        node.on('input', function(msg) {
            msg.payload = "\tHello World!\n"+ node.bucketkey;
            node.send(msg);
        });
    }
    RED.nodes.registerType("hello-world", HelloWorldNode);
}