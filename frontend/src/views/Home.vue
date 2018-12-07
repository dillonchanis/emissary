<template>
  <div>
    <h1 class="font-display text-display text-3xl mb-10">Dashboard</h1>
    <div class="md:flex">
      <app-card v-for="card in cards"
                :key="card.id"
                :data="card.data"
                :title="card.title" />
    </div>

    <app-section title="Upcoming Campaigns">
      <app-campaign-list :campaigns="campaigns"/>
      <router-link class="block mt-6 mb-8 bold text-display no-underline"
                   to="/campaigns">View All Campaigns ></router-link>
    </app-section>

    <app-section title="Recent Subscribers">
      <app-subscriber-list :subscribers="subscribers"/>
      <router-link class="block mt-6 bold text-display no-underline"
                   to="/subscribers">View All Subscribers ></router-link>
    </app-section>
  </div>
</template>

<script>
import AppCard from '@/components/Card'
import AppSection from '@/components/layout/sections/Section'
import AppCampaignList from '@/components/dashboard/campaigns/CampaignList'
import AppSubscriberList from '@/components/dashboard/subscribers/SubscriberList'

export default {
  name: 'Home',
  components: {
    AppCard,
    AppSection,
    AppCampaignList,
    AppSubscriberList
  },
  data () {
    return {
      cards: [
        { id: 1, data: '326', title: 'Total Subscribers' },
        { id: 2, data: '45%', title: 'Campaign Clicks' },
        { id: 3, data: '12', title: 'New Subscribers (Week)' }
      ],
      campaigns: [
        { id: 1, title: 'Christmas Specials', subcount: 250, date: 'December 20, 2018' },
        { id: 2, title: 'New Year Newsletter', subcount: 180, date: 'January 1, 2019' }
      ],
      subscribers: [
        { id: 1, name: 'Gina Baker', email: 'gina.baker@ahimsa.com' },
        { id: 2, name: 'Dillon Chanis', email: 'dillon@vue.com' },
        { id: 3, name: 'Luna Baker', email: 'loony@meow.com' }
      ]
    }
  }
}
</script>
