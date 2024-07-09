import React from "react";
import Head_Bg from "../../img/Head_Bg.jpg";

const Header = () => {
	return (
		<header
			id='header'
			className='flex flex-col items-center justify-center bg-cover bg-center text-white py-[60px]'
			style={{
				backgroundImage: `url(${Head_Bg})`,
			}}
		>
			<div className='noto-sans-ExtraBold flex flex-col items-center text-[40px]'>
				<span>- 노은아 -</span>
				<span>프론트 엔드 개발자 포트폴리오</span>
			</div>
			<hr className='w-[100px] h-[3px] bg-[#9cb4d4] border-[#9cb4d4] mt-[30px] mb-[10px]' />
			<div className='content-font flex flex-col items-center pt-[20px] pb-[30px]'>
				<span>안녕하세요.</span>
				<span>
					본질에 집중하는 프론트엔드 개발자 노은아입니다.
				</span>
			</div>
			<button className='content-font w-[150px] h-[50px] bg-[#9cb4d4] rounded-[30px] text-center'>
				더 알아보기 ↓
			</button>
		</header>
	);
};

export default Header;
