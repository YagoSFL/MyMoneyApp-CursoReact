import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import { init, create } from './billingCycleActions'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'
import Input from '../common/form/input'
import Grid from '../common/layout/grid'

class EmCaixa extends Component {

    componentWillMount() {
        this.props.init()
    }

    render(){
        const { readOnly } = this.props
        return (
            <div>
                <ContentHeader title='Dinheiro em Caixa' small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Dinheiro' icon='usd' target='tabList'/>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <Row>
                                    <ValueBox cols='12 4' color='green' icon='money'
                                        value='1000' text='Saldo' />
                                </Row>
                                <Row>
                                    <form role='form'>
                                        <Grid cols='12 4'>
                                            <div className='box-body'>
                                                <Input placeHolder='Valor em dinheiro' readOnly={readOnly}
                                                    type='text'/> 
                                                
                                            </div>
                                            <div className='box-footer'>
                                                <button type='submit' className='btn btn-success'>
                                                    Adicionar</button>
                                                <button type='button' className='btn btn-default'
                                                    onClick={this.props.init}>Cancelar</button>
                                            </div>
                                        </Grid>
                                    </form>
                                </Row>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    init, create}, dispatch)
export default connect(null, mapDispatchToProps)(EmCaixa)