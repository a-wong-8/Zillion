// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchSaves } from "../../store/listing";

// export default function UserSaves({userId}) {
//     const dispatch = useDispatch();
//     const userSaves = useSelector((state)=> Object.values(state.listings))

//     useEffect(()=> {
//         dispatch(fetchSaves());
//     },[])

//     // const saves = userSaves.filter(save=>{
//     //     save[userId] === userId
//     // })

//     console.log(userSaves);

//     return (
//         <ul>
//             {/* {userSaves.filter(saves=>{
//               <li>
                
//               </li>  
//             })} */}
//         </ul>
//     )
// }