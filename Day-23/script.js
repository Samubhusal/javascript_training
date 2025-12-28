let  myCollegeMemberList=[
    {
        id:1,
        memberName:'Sanjeev Bhandari',
        imageLink:'https://exampleimage.com',
        isPrincipal:true,
        isVicePrinciple:false,
        subjectList:['E-Commerce','Computer-Security'],
        address:'Manigram',
        isCoordinator:false,
    },
    {
        id:1,
        memberName:'Shiva Bhattari',
        imageLink:'',
        isPrincipal:false,
        isVicePrinciple:true,
        subjectList:['computer-security','abc'],
        address:'Manigram',
        isCoordinator:false,
    },
    {
        id:1,
        memberName:'Pooja Sharma',
        imageLink:'',
        isPrincipal:false,
        isVicePrinciple:false,
        subjectList:['computer-security','abc'],
        address:'Manigram',
        isCoordinator:true,  
    },
    {
        id:1,
        memberName:'Sanjay Thapa',
        imageLink:'',
        isPrincipal:false,
        isVicePrinciple:false,
        subjectList:['computer-security','abc'],
        address:'Manigram',
        isCoordinator:true,   
    },
    {
        id:1,
        memberName:'Rajesh Magar',
        imageLink:'',
        isPrincipal:false,
        isVicePrinciple:false,
        subjectList:['computer-security','abc'],
        address:'manigram',
        isCoordinator:true,
    }
];

for(let i=0;i<myCollegeMemberList.length;i++){
    let{ memberName,address,isCoordinator,isPrincipal,imageLink,isVicePrinciple,subjectList}=myCollegeMemberList[i];
    console.log(memberName);
    console.log(address);
    console.log(isCoordinator);
    console.log(isPrincipal);
    console.log(imageLink);
    console.log(isVicePrinciple);
    console.log(subjectList);
    //   console.log(myCollegeMemberList[i].memberName);
}

let nestedObject={
    address:{
        from:{
            permanent:'nepal',
            temporary:'india',
        },
    },
};
let {permanent,temporary}=nestedObject.address.from;
console.log(`${permanent} and ${temporary}`);
