function v2d(x,y) {
    this.x = x
    this.y = y
    this.tmp = 1;
    return {
        setPoint : function(x,y) {
            this.x = x
            this.y = y
        },
        clone : function() {
            return new v2d(this.x,this.y)
        },

        maxLength : function(max) {
            this.tmp = this.norm()
            if(this.tmp > max) {
                this.scale(max/this.tmp)
            }
            return this
        },

        setVector : function(v) {
            this.x = v.x
            this.y = v.y
            return this
        },
        cmp : function(v) {
            return this.norm() > v.norm()
        },
        X : function(o){
            this.x=this.x*o.x;
            this.y=this.y*o.y;
            return this
        },
        normalize: function() {
            this.tmp = this.x;
            this.x  = this.x / Math.hypot(this.x,this.y)
            this.y = this.y / Math.hypot(this.tmp,this.y)
            return this
        },
        addP : function(x,y) {
            this.x=this.x+x
            this.y=this.y+y
            return this
        },
        add: function(o){
            this.x=this.x+o.x
            this.y=this.y+o.y
            return this
        },
        sub : function(o){
            this.x=this.x-o.x
            this.y=this.y-o.y
            return this
        },
        scale : function(n){
            this.x=this.x*n;this.y=this.y*n;
            return this
        },
        stance : function(o) {
            return Math.sqrt(
                (this.y-o.y)*(this.y-o.y)+  
                (this.x-o.x)*(this.x-o.x)
            )
        },
        norm : function() {
            return Math.hypot(this.x,this.y)
        }
    }
}
    
    