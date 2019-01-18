import angular from 'angular';
import {AuthenticationModule} from './authentication.module';

describe('authentication', () => {
  beforeEach(angular.mock.module(AuthenticationModule));
  it('should check if user is logged in', angular.mock.inject((authentication) => {
    spyOn(authentication, 'getToken')
      .and.returnValue('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjg2NTU0NzcwNjMxMiwiaWF0IjoxNTQ3NzkyODAxfQ.WZRV1Qyj6Yw3M0KIiXarnVgBh5rAVZvbTlBwqIC97Bo');
    expect(authentication.isLoggedIn()).toBe(true);
  }));
});
