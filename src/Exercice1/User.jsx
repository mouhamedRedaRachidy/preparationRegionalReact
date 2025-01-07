import axios from "axios";
import { useEffect, useState } from "react";

export const User = (props) => {
    
    const [posts, setPosts] = useState([])
    const [currentUtilisateur, setCurrentUtilisateur] = useState(null)
    const handelDetail = (id) => {
        if (currentUtilisateur?.idUser === id) {
            setCurrentUtilisateur(null); // إخفاء البيانات إذا كان نفس المستخدم
        } else {
            setCurrentUtilisateur(null); // إعادة التعيين أولاً
            setTimeout(() => {
                const postUser = posts.filter((p) => p.userId === id);
                setCurrentUtilisateur({ idUser: id, post: postUser }); // عرض البيانات الجديدة
            }, 12); // تأخير قصير للسماح بإعادة التعيين
        }
    };
    useEffect(() => {
        const getPosts = async () => {
            const posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setPosts(posts.data)
        }
        getPosts()
    }, [])
    const styleCard = {
        border: "solid black 1px",
        padding: "2rem",
        width: "90%",
    };

    return (
        <div style={styleCard}>
            <h3>{props.name}</h3>
            <button onClick={() => handelDetail(props.id)}>Detail</button>
            <div>

                {currentUtilisateur?.idUser === props.id &&
                    currentUtilisateur.post.map((post) => (
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
};
