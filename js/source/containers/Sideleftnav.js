import React from 'react';
import Sideleft_item from '../components/Sideleft_item';


class Sideleftnav extends React.Component{
	render(){
		return <nav id="sideleft">
		<Sideleft_item item_value="生鲜水果"/>
		<Sideleft_item item_value="进口零食"/>
		<Sideleft_item item_value="进口酒饮"/>
		<Sideleft_item item_value="奶制品  "/>
		<Sideleft_item item_value="休闲零食"/>
		<Sideleft_item item_value="饼干糖巧"/>
		<Sideleft_item item_value="酒水饮料"/>
		<Sideleft_item item_value="冲饮保健"/>
		<Sideleft_item item_value="米面杂粮"/>
		<Sideleft_item item_value="油品调味"/>
		<Sideleft_item item_value="个人清洁"/>
		<Sideleft_item item_value="美容护肤"/>
		<div id="sideleft_erweima" >
		<img src="./source/image/erweima.jpg"/>
		</div>
		</nav> ;
	}

}

export default Sideleftnav; 