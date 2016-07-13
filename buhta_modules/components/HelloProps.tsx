import * as React from "react";
import {Button} from "../buhta-core/Components/Button/Button";
import {executeSQL} from "../buhta-core/SQL";


//import {SplitPane} from "react-split-pane";

//import * as SplitPane from "react-split-pane";

export interface HelloProps { compiler: string; framework: string;
}

export class Hello extends React.Component<HelloProps, {}> {

    handleClick() {
        console.log("Ok");

        executeSQL("select TOP 50 Ключ,Номер,Название from [Вид ТМЦ] order by Номер")
            .done((table) => {

                // this.dataSource = table.rows.map((r) => {
                //     return {Ключ: r["Ключ"], Номер: r["Номер"], Название: r["Название"]};
                // });

                console.log("select top 5006* Ключ,Номер,Название from [Вид ТМЦ] order by Ключ --> " + table.rows[0].getValue(2));
            })
            .fail((err) => {
                alert(err.message);
            });

    }

    but2visible: boolean = false;

    clickHanler() {
        console.log("click1");
        this.but2visible = true;
        this.forceUpdate();
    }

    render() {

        return <div>
            <button onClick={this.clickHanler.bind(this)}>Кнопка 1</button>
            <Button visible={this.but2visible} onClick={ (e) => alert("Ok1") }>Кнопка 2</Button>
            <div split="vertical" minSize={50} defaultSize={100}>
                <div>3костяee333===w==444==33====333</div>
                <div></div>
            </div>

        </div>;
        // return <div>
        //     <button onClick={ this.handleClick }>get sql</button>
        //     Hello 3++44=66332===22o3m {this.props.compiler} and {this.props.framework}!
        //     <SplitPane split="vertical" minSize={50} defaultSize={100}>
        //         <div>3костя333=====444==33====333</div>
        //         <div></div>
        //     </SplitPane>
        // </div>;
    }
}