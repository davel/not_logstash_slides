{
    var lines = [
        "[Fri May 31 09:36:43 2013] [info] S::App::RequestDecorator::Session::set_session(65) setting session [Session=HASH(0x19a76b64)]",
        "[Fri May 31 09:36:43 2013] [info] S::SybaseDAO::Partner::get_partner(182) get_partner 9",
        "[Fri May 31 09:36:43 2013] [info] S::SybaseDAO::Common::_do_placeholder_sql(424) running exec sp_get_partner ? with params 9",
        "[Fri May 31 09:36:43 2013] [info] S::SybaseDAO::Common::_logit(552) Data! SQL: Got 1 rows. First row/col = 9 [Error=0]",
        "[Fri May 31 09:36:43 2013] [info] S::SybaseDAO::Common::_do_placeholder_sql(424) running exec sp_get_user ?,? with params 11,N",
        "[Fri May 31 09:36:43 2013] [warn] [WlX568Co] S::TO::Facebook::Session::new(69) No fb_user_id for Sitemaker::TO::Facebook::Session",
        "[Fri May 31 09:36:43 2013] [info] S::SybaseDAO::Common::_logit(552) Data! SQL: Got 2 rows. First row/col = 11 [Error=0]",
        "[Fri May 31 09:36:43 2013] [info] S::SybaseDAO::Common::_do_placeholder_sql(424) running exec sp_get_oauth ?,?,? with params 11,13,FBK",
        "[Fri May 31 09:36:43 2013] [info] S::SybaseDAO::Common::_logit(552) Data! SQL: Got 1 rows. First row/col = 11 [Error=0]",
        "[Fri May 31 09:36:43 2013] [info] H::FacebookAdmin::_get_facebook_access_token(678) Got access token for uid:11 cid:13",
        "[Fri May 31 09:36:43 2013] [info] S::SybaseDAO::Partner::get_partner_facebook_apps(522) get_partner_facebook_apps 9",
        "[Fri May 31 09:36:43 2013] [info] S::SybaseDAO::Common::_do_placeholder_sql(424) running exec sp_get_partner_facebook_apps ?, ? with params 9,SHOP",
        "[Fri May 31 09:36:43 2013] [info] S::SybaseDAO::Common::_logit(552) Data! SQL: Got 1 rows. First row/col = 1 [Error=0]",
        "[Fri May 31 09:36:44 2013] [info] H::FacebookAdmin::_call_facebook_graph_api(801) Successfully Get application Facebook pages",
        "[Fri May 31 09:36:55 2013] [info] H::Dispatcher::_set_default_headers(210) cookie: markc=d030a000f04080d040a231d087e3c8ae70b0102030e0e05080703181en; fb_link=",
        "[Fri May 31 09:36:55 2013] [info] H::Dispatcher::handler(92) psgi calling on Apache2::RequestRec=SCALAR(0x19ac01a8)",
        "[Fri May 31 09:36:55 2013] [info] S::App::call(120) creating services",
        "[Fri May 31 09:36:55 2013] [info] S::ContentTree::Algorithm::set_strategy(94) algorithm version?2",
        "[Fri May 31 09:36:55 2013] [info] S::App::Chain::AMF::handle(44) /_amf/facebookadmin",
        "[Fri May 31 09:36:55 2013] [info] S::App::Chain::AMF::handle(46) AMF",
        "[Fri May 31 09:36:55 2013] [warn] [WwT9q8Co] H::Dispatcher::__ANON__(21) Use of uninitialized value in pattern match (m//) at /usr/lib/perl5/site_perl/5.8.8/AMF/Connection/MessageHeader.pm line 17.",
        "[Fri May 31 09:36:55 2013] [info] H::Dispatcher::_set_default_headers(210) cookie: markc=d030a000f04080d040a231d087e3c8ae70b0102030e0e05080703181en; fb_link=",
        "[Fri May 31 09:36:55 2013] [info] S::App::RequestDecorator::AMF::_parse_data(124) amf has auth header",
        "[Fri May 31 09:36:55 2013] [info] H::Dispatcher::handler(92) psgi calling on Apache2::RequestRec=SCALAR(0x19b86d4c)",
        "[Fri May 31 09:36:55 2013] [info] S::App::RequestDecorator::Session::session(51) getting/creating session",
        "[Fri May 31 09:36:55 2013] [info] S::App::call(120) creating services",
        "[Fri May 31 09:36:55 2013] [info] S::ContentTree::Algorithm::set_strategy(94) algorithm version?2",
        "[Fri May 31 09:36:55 2013] [info] Session::new(178) no user - try to upgrade guest",
        "[Fri May 31 09:36:55 2013] [info] Session::_decode_mark(2377) decoded mark to s210 u11 md3a0f48d4a3d87e3c8ae7b123ee58738 len",
        "[Fri May 31 09:36:55 2013] [info] S::SybaseDAO::Session::get_user_session(136) will call sp_get_user_session 210",
        "[Fri May 31 09:36:55 2013] [info] S::SybaseDAO::Common::_do_placeholder_sql(424) running exec sp_get_user_session ? with params 210",
        "[Fri May 31 09:36:55 2013] [info] S::App::Chain::AMF::handle(44) /_amf/facebookadmin",
        "[Fri May 31 09:36:55 2013] [info] S::App::Chain::AMF::handle(46) AMF",
        "[Fri May 31 09:36:55 2013] [warn] [WwUCTsCo] H::Dispatcher::__ANON__(21) Use of uninitialized value in pattern match (m//) at /usr/lib/perl5/site_perl/5.8.8/AMF/Connection/MessageHeader.pm line 17.",
        "[Fri May 31 09:36:55 2013] [info] S::App::RequestDecorator::AMF::_parse_data(124) amf has auth header",
        "[Fri May 31 09:36:55 2013] [info] S::App::RequestDecorator::Session::session(51) getting/creating session",
        "[Fri May 31 09:36:55 2013] [info] Session::new(178) no user - try to upgrade guest",
        "[Fri May 31 09:36:55 2013] [info] Session::_decode_mark(2377) decoded mark to s210 u11 md3a0f48d4a3d87e3c8ae7b123ee58738 len",
        "[Fri May 31 09:36:55 2013] [info] S::SybaseDAO::Session::get_user_session(136) will call sp_get_user_session 210",
        "[Fri May 31 09:36:55 2013] [info] S::SybaseDAO::Common::_do_placeholder_sql(424) running exec sp_get_user_session ? with params 210",
        "[Fri May 31 09:36:55 2013] [info] S::SybaseDAO::Common::_logit(552) Data! SQL: Got 1 rows. First row/col = dlambley [Error=0]",
        "[Fri May 31 09:36:55 2013] [info] S::SybaseDAO::Session::get_user_session(145) ARRAY(0x19b86548), 0",
        "[Fri May 31 09:36:55 2013] [info] S::SybaseDAO::Session::get_user_session(149) got row",
        "[Fri May 31 09:36:55 2013] [info] Session::db_sess_info(1571) got db sess info u11 c13",
        "[Fri May 31 09:36:55 2013] [info] Session::auth_from_mark(623) authed uid 11 from query mark",
        "[Fri May 31 09:36:55 2013] [info] Session::_populate_from_db_info(696) populated from db info, id is 210",
        "[Fri May 31 09:36:55 2013] [info] Session::setLanguageCode(1267) setting session languageCode to en",
        "[Fri May 31 09:36:55 2013] [info] Session::_get_community(498) looking at comm var 13",
        "[Fri May 31 09:36:55 2013] [info] S::SybaseDAO::Common::_do_placeholder_sql(424) running exec sp_get_community ?,? with params 13,Y",
        "[Fri May 31 09:36:55 2013] [info] S::SybaseDAO::Common::_logit(552) Data! SQL: Got 1 rows. First row/col = dlambley [Error=0]",
        "[Fri May 31 09:36:55 2013] [info] S::SybaseDAO::Session::get_user_session(145) ARRAY(0x19ba88f4), 0",
        "[Fri May 31 09:36:55 2013] [info] S::SybaseDAO::Session::get_user_session(149) got row",
        "[Fri May 31 09:36:55 2013] [info] Session::db_sess_info(1571) got db sess info u11 c13",
        "[Fri May 31 09:36:55 2013] [info] Session::auth_from_mark(623) authed uid 11 from query mark",
        "[Fri May 31 09:36:55 2013] [info] Session::_populate_from_db_info(696) populated from db info, id is 210",
        "[Fri May 31 09:36:55 2013] [info] Session::setLanguageCode(1267) setting session languageCode to en",
        "[Fri May 31 09:36:55 2013] [info] Session::_get_community(498) looking at comm var 13",
        "[Fri May 31 09:36:55 2013] [info] S::SybaseDAO::Common::_do_placeholder_sql(424) running exec sp_get_community ?,? with params 13,Y",
        "[Fri May 31 09:36:55 2013] [info] S::SybaseDAO::Common::_logit(552) Data! SQL: Got 1 rows. First row/col = '' [Error=0]",
        "[Fri May 31 09:36:55 2013] [info] Session::new(255) check for lang override...",
        "[Fri May 31 09:36:55 2013] [info] Session::new(263) returning final session c: 13 u: 11",
        "[Fri May 31 09:36:55 2013] [info] Session::new(275) tweaked UNIQUE_IDWwUCTsCoArIAAHziFFgAAAAB:sc:d030a",
        "[Fri May 31 09:36:55 2013] [info] S::App::RequestDecorator::Session::set_session(65) setting session [Session=HASH(0x19b7dbbc)]",
        "[Fri May 31 09:36:55 2013] [info] S::SybaseDAO::Common::_logit(552) Data! SQL: Got 1 rows. First row/col = '' [Error=0]",
        "[Fri May 31 09:36:55 2013] [info] Session::new(255) check for lang override...",
        "[Fri May 31 09:36:55 2013] [info] Session::new(263) returning final session c: 13 u: 11",
        "[Fri May 31 09:36:55 2013] [info] Session::new(275) tweaked UNIQUE_IDWwT9q8CoArIAAHzhCuEAAAAA:sc:d030a",
        "[Fri May 31 09:36:55 2013] [info] S::App::RequestDecorator::Session::set_session(65) setting session [Session=HASH(0x19aa6298)]",
        "[Fri May 31 09:36:55 2013] [info] #### Start of PSGI ####",
        "[Fri May 31 09:36:55 2013] [info] IN: (markc) = d030a000f04080d040a231d087e3c8ae70b0102030e0e05080703181en",
        "[Fri May 31 09:36:55 2013] [info] S::App::handle(239) calling getFacebookPages on handler Sitemaker::Handler::FacebookAdmin=HASH(0x19a57f5c)",
        "[Fri May 31 09:36:55 2013] [info] #### Start of PSGI ####",
        "[Fri May 31 09:36:55 2013] [info] IN: (markc) = d030a000f04080d040a231d087e3c8ae70b0102030e0e05080703181en",
        "[Fri May 31 09:36:55 2013] [info] S::App::handle(239) calling checkFacebookSession on handler Sitemaker::Handler::FacebookAdmin=HASH(0x19a5bdb0)",
        "[Fri May 31 09:36:55 2013] [info] S::App::handle(243) setting daofac",
        "[Fri May 31 09:36:55 2013] [info] S::App::handle(243) setting configstore"
    ];

    var current_line = 0;
    var div;
    window.setInterval(function() {
        if (!div) {
            div = document.getElementById("scroller");
        }
        if (div) {
            if (current_line > lines.length) {
                current_line = 0;
            }

            if (div.childNodes.length > 8) {
                div.removeChild(div.firstChild);
            }

            div.appendChild(
                document.createTextNode(lines[current_line]+"\n")
            );
            current_line++;
        }
    }, 80);
}
