import React, { useEffect, useState } from "react";
import { Skeleton, Card, Pagination, Button } from 'antd';

import useQueryCharacters from "../hooks/useQueryCharacters";
import { Character } from "../interface";
import DetailModal from "../components/Modal/Modal";

const { Meta } = Card;
const pageSize =  6;

const Main: React.FC = (): JSX.Element => {
    const [page, setPage] = useState<number>(1);
    const [totalPage, setTotalPage] = useState<number>(0);
    const { data, isLoading } = useQueryCharacters(page);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [detail, setDetail] = useState<Character>();

    const handleChange = (e: number) => {
        setPage(() => e);
    };

    useEffect(() => {
        if (data) {
            setTotalPage(() => data.info.pages);
        }
    }, [data]);

    const openModal = (id: number) => {
        setShowModal(true);
        setDetail(data.results.filter((item: Character) => item.id === id)[0]);
    }

    const handleClose = () => {
        setShowModal(false);
    } 

    return (
        <>
            {isLoading ? (
                <Skeleton loading={isLoading}></Skeleton>
            ) : (
                <section className="content-wrapper">
                    {data.results?.map((character: Character) => (
                        <div key={character.id}  onClick={() => openModal(character.id)}>
                            <Card
                                hoverable
                                key={character.id}    
                                cover={<img alt="example" src={character.image} />}
                            >
                                <Meta title={character.name} description={character.location.name} />
                            </Card>
                        </div>
                    ) )}
                </section>
            )}
            <Pagination
                pageSize={pageSize}
                current={page}
                total={totalPage}
                onChange={handleChange}
                style={{ padding: "20px", textAlign: "center" }}
            />

            {showModal && (
                <DetailModal
                    visible={showModal}
                    detail={detail!}
                    onClose={handleClose} 
                    footer={[
                        <Button key="back" onClick={handleClose}>
                            Cancel
                        </Button>
                    ]}
                />
            )}
        </>
    );
};

export default Main;
