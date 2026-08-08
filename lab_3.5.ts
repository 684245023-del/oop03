enum Role{
    Admin,
    Editor,
    Viewer
}
interface User{
    username: string,
    email: string,
    role: Role
}
function check(user: User){
    if(user.role===Role.Admin)
        console.log(`${user.username}ได้สิทธิผู้ดูเเลระบบ`)
    else if(user.role===Role.Editor)
        console.log(`${user.username}ได้สิทธิผู้เเก้ไขระบบ`)
    else
    console.log(`${user.username}ได้สิทธิผู้ใช้งาน`)
}
const user1={username: "Wanpen",email:"as@gmail.com",role: Role.Admin};
check(user1);