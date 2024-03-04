import TermsForm from '@/components/TermsForm';
import { useAuth } from '@/context/auth';
import apiClient from '@/lib/apiClient';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const login = () => {
    const [ischeckd, setischeckd] = useState(false);
    const checkOn = () => {
        setischeckd(true)
    }
    const checkOff = () => {
        setischeckd(false)
    }
    const [email, setemail] = useState<string>("");
    const [password, setpassword] = useState<string>("");
    const router = useRouter();
    const { login } = useAuth();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await apiClient.post("/auth/login", {
                email, password,
            });
            const token = response.data.token
            login(token)

            router.push("/");
        } catch (error) {
            alert("入力内容が正しくありません。");
        }
    };

    return (
        <div className="flex flex-col h-screen">
            <div className="bg-gray-100 flex-auto">
                <div className="flex justify-center mt-20">
                    <div className="w-9/12 border bg-white">
                        <div className="my-16 text-center">
                            <h2 className="text-4xl font-bold">ログイン</h2>
                            <form onSubmit={handleSubmit} className="mt-12">
                                <div className="mb-3">
                                    <input
                                        id='email'
                                        type="email"
                                        placeholder="メール"
                                        name="email"
                                        autoComplete='email'
                                        required
                                        className="text-xl w-7/12 p-3 border rounded"
                                        onChange={(e) => {
                                            setemail(e.target.value)
                                        }}
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
                                        onChange={(e) => {
                                            setpassword(e.target.value)
                                        }}
                                    />
                                </div>
                                {/* <div className="mb-5">
                                    <label className="inline-flex items-center">
                                        <input type="checkbox" className="form-checkbox" />
                                        <span className="ml-2 text-sm">ログインデータを保存する</span>
                                    </label>
                                </div> */}
                                <button
                                    type="submit"
                                    className="mb-3 text-xl w-4/12 bg-gray-500 text-white py-2 rounded hover:opacity-75"
                                >
                                    ログイン
                                </button>
                            </form>
                            <TermsForm clickOn={checkOn} clickOff={checkOff} />
                            {ischeckd ?
                                <h1>オン</h1>
                                :
                                <h1>オフ</h1>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default login