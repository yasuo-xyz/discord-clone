import React, { useEffect, useState } from 'react'
import { onSnapshot, collection, query, DocumentData, CollectionReference, Query } from "firebase/firestore";
import { channel } from 'diagnostics_channel';
import { db } from '../firebase';
import { useAppSelector } from '../app/hooks';


// インターフェースを用意
interface Channals {
    id: string,
    channel: DocumentData;
}

// カスタムフックスを作成
const useCollection = (data: string) => {
    const [documents, setDocuments ] = useState<Channals[]>([]);
    const collectionRef: Query<DocumentData> = query(collection(db, data));
    
    useEffect(() => {
        onSnapshot(collectionRef, (querySnapshot) => {
            const channelsResults: Channals[] = [];
            querySnapshot.docs.forEach((doc) =>
                channelsResults.push({
                    // ここでゆうdocのidとは、ファイヤーベースにあるドキュメントのランダムな文字列が該当する
                    id: doc.id,
                    channel: doc.data(),
                })
            );
            setDocuments(channelsResults);
        });
    }, []);

  return { documents } ; 
};

export default useCollection