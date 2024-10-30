//import { supabase } from '@/lib/supabaseClient'
import { createClient } from '../../../utils/supabase/server.js'
export async function POST(req) {
  console.log('API  route called')
  try {
    const supabase = createClient()
    const {
      data: { user },
      error: userError
    } = await supabase.auth.getUser();
    if (userError) {
      console.error('Error fetching user:', userError)
      return new Response(JSON.stringify({ error: 'Failed to get user' }), {
        status: 401
      })
    } else {
      // console.log('current user', user)
    }
    const user_id = user.id
    const { weeklyGoal } = await req.json()
    const dailyQuota = Math.ceil(weeklyGoal / 7)
    console.log('weeklyGoal:', weeklyGoal)

    if (!weeklyGoal) {
      return new Response(JSON.stringify({ error: 'weeklyGoal is required' }), {
        status: 400
      })
    }

    const { data, error } = await supabase
      .from('goals')
      .insert([
        { user_id: user_id, weekly_quota: weeklyGoal, daily_quota: dailyQuota }
      ])
      .select('*')
      console.log(data[0]);

    if (error) {
      console.error('Supabase error:', error)
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500
      })
    }
console.log('we in the goal!')
    return new Response(JSON.stringify({ data }), { status: 200 })
  } catch (error) {
    console.error('Error handling POST request:', error)
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500
    })
  }
}
