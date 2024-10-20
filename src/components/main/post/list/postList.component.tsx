/* 
	post list component
	src/component/main/post/list/postList.component.tsx
*/
'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import styles from './postList.module.scss';
import LinkButton from '@components/_utiles/link/link.component';
import Table from '@components/_utiles/table/table.component';
import { Post, usePostHook } from './postList.hook';

export default function PostListItem() {
    //const [selectedOption, setSelectedOption] = useState({ label: '선생님', value: '' });

	const {
		postData,
	} = usePostHook();

	const posts = postData;

	const columns = [
		{ key: 'id', header: '번호' },
		{
			key: 'title',
			header: '제목',
			render: (posts: Post) => (
				<Link href={`/post/view/${posts.id}`}>
					{posts.title}
				</Link>
			)
		},
		{ key: 'author', header: '작성자' },
		{ key: 'date', header: '작성일' },
		{ key: 'satisfaction', header: '강의만족도' },
		{ key: 'views', header: '조회수' },
	];

    return (
		<div className={styles.inner_container}>
			<div className={styles.siwon_board}>
				<div className={styles.post_header}>
					<div className={styles.post_header_left}>
						<div className={styles.post_title}>
							<h2>총 <span>{posts.length}</span>개의 수강후기</h2>

						</div>
						<ul>
							<li>
								{/* <ComponentSelect
									className={styles.select}
									options={teacherList}
									selectedOption={selectedOption}
									setSelectedOption={setSelectedOption}
								/> */}
							</li>
						</ul>
					</div>
					<div className={styles.post_header_right}>
						<ul className={styles.post_button}>
							<li>
								<LinkButton
									variant="btn_signup"
									className="link_btn"
									href="/post/write"
									text="수강후기 작성"
								/>
							</li>
						</ul>
					</div>
				</div>
				{/* post table */}
				<div className={styles.post_table}>
					<Table
						items={posts}
						columns={columns}
					/>
				</div>
			</div>
		</div>
    )
}
