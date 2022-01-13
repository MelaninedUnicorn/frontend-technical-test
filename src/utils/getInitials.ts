export const getInitials  = (name:string) => {
    
    let initials = name.split(" ").map((n)=>n[0]).join(".");
    return initials;
}