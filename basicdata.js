let empname="manoj"
let branch="Hyd"
let location={
getBranch:function(){
    return branch;
},
setBranch:function(newBranch){
    branch=newBranch;
}
}
export default location