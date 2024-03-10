import apiClient from "@/lib/apiClient";
import { useRouter } from "next/router";
import { useState } from "react";

const signup = () => {
    const [username, setusername] = useState<string>("");
    const [email, setemail] = useState<string>("");
    const [password, setpassword] = useState<string>("");
    const router = useRouter();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await apiClient.post("/auth/register", {
                username, email, password,
            });
            router.push("/login");
        } catch (error) {
            alert("入力内容が正しくありません。");
        }
    };

    return (

        <div className="flex flex-col h-screen">

            <div className=" flex-auto">

                <div className="flex justify-center mt-20">
                    <div className="w-9/12 border bg-white">
                        <div className="my-16 text-center">
                            <h2 className="text-4xl font-bold">新規登録</h2>
                            <form onSubmit={handleSubmit} className="mt-12">
                                <div className="mb-3">
                                    <input
                                        id='name'
                                        type="text"
                                        placeholder="お名前"
                                        name="name"
                                        autoComplete='name'
                                        required
                                        className="text-xl w-7/12 p-3 border rounded"
                                        onChange={(e) => setusername(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        id='email'
                                        type="email"
                                        placeholder="メール"
                                        name="email"
                                        autoComplete='email'
                                        required
                                        className="text-xl w-7/12 p-3 border rounded"
                                        onChange={(e) => setemail(e.target.value)}
                                    />
                                </div>
                                <div className="mb-5">
                                    <input
                                        id='password'
                                        type="password"
                                        placeholder="パスワード"
                                        name="password"
                                        autoComplete='current-password'
                                        required
                                        className="text-xl w-7/12 p-3 border rounded"
                                        onChange={(e) => setpassword(e.target.value)}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="mb-3 text-xl w-4/12 bg-gray-500 text-white py-2 rounded hover:opacity-75"
                                >
                                    新規登録
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default signup